var readline = require('readline');
var Promise = require('bluebird');
var lines = require('lines');
var parseDat = require('parse-dat');

function WeatherData(filename) {
  this.filename = filename;
}

WeatherData.prototype.dayWithSmallestSpread = function () {
  return this.findByCompare(function (prev, next) {
    return this.tempSpread(next) < this.tempSpread(prev) ? 1 : -1;
  }.bind(this));
};

WeatherData.prototype.dayWithLargestSpread = function () {
  return this.findByCompare(function (prev, next) {
    return this.tempSpread(next) > this.tempSpread(prev) ? 1 : -1;
  }.bind(this));
};

WeatherData.prototype.findByCompare = function (comparator) {
  return new Promise(function (resolve, reject) {
    var day = null;
    var headerSeen = false;

    lines({
      filename: this.filename,
      line: function (line) {
        if (!headerSeen) {
          headerSeen = true;
          return;
        }

        if (line.trim() === '') {
          return;
        }

        var current = this.parseDay(line);

        if (day === null) {
          day = current;
          return;
        }

        if (comparator(day, current) > 0) {
          day = current;
        }
      }.bind(this),
      close: function () {
        resolve(day);
      }
    });
  }.bind(this));
};

WeatherData.prototype.columns = [
  {name: 'number', size: 5},
  {name: 'maxTemp', size: 6},
  {name: 'minTemp', size: 6},
  {name: 'avgTemp', size: 6},
  {name: 'HDDay', size: 7},
  {name: 'AvDP', size: 5},
  {name: '1HrP', size: 5},
  {name: 'TPcpn', size: 6},
  {name: 'WxType', size: 7},
  {name: 'PDir', size: 5},
  {name: 'AvSp', size: 5},
  {name: 'Dir', size: 4},
  {name: 'MxS', size: 4},
  {name: 'SkyC', size: 5},
  {name: 'MxR', size: 4},
  {name: 'MnR', size: 3},
  {name: 'AvSLP', size: 6},
];

WeatherData.prototype.parseDay = function (line) {
  return parseDat({columns: this.columns}, line);
};

WeatherData.prototype.tempSpread = function (day) {
  return Math.abs(parseInt(day.minTemp) - parseInt(day.maxTemp));
};

module.exports = WeatherData;
