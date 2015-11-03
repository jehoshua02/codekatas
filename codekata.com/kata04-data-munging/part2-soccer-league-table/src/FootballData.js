var Promise = require('bluebird');
var parseDat = require('parse-dat');
var lines = require('lines');

var FootballData = function (filename) {
  this._filename = filename;
};

FootballData.prototype._columns = [
  {name: 'number', size: 7},
  {name: 'team', size: 16},
  {name: 'p', size: 6},
  {name: 'w', size: 2},
  {name: 'l', size: 4},
  {name: 'd', size: 4},
  {name: 'f', size: 6},
  {name: '_', size: 5, ignore: true},
  {name: 'a', size: 2},
  {name: 'pts', size: 6},
];

FootballData.prototype.teamWithSmallestSpread = function () {
  return new Promise(function (resolve, reject) {
    var team = null;
    var headerSeen = false;

    lines({
      filename: this._filename,
      line: function (line) {
        if (!headerSeen) {
          headerSeen = true;
          return;
        }

        if (line.trim() === '') {
          return;
        }

        if (line.trim().match(/^-+$/)) {
          return;
        }

        var current = this._parseTeam(line);

        if (team === null) {
          team = current;
        }

        if (this._compareSpread(team, current) === 1) {
          team = current;
        }
      }.bind(this),
      close: function () {
        resolve(team);
      }
    });
  }.bind(this));
};

FootballData.prototype._parseTeam = function (line) {
  return parseDat({columns: this._columns}, line);
};

FootballData.prototype._compareSpread = function (a, b) {
  return this._spread(a) < this._spread(b) ? -1 : 1;
};

FootballData.prototype._spread = function (team) {
  return Math.abs(parseInt(team.f) - parseInt(team.a));
};

module.exports = FootballData;
