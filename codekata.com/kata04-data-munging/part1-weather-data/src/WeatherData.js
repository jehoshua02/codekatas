var path = require('path');
var readline = require('readline');
var Promise = require('bluebird');

function WeatherData(filename) {
  this.filename = filename;
}

WeatherData.prototype.dayWithSmallestSpread = function () {
  return new Promise(function (resolve, reject) {
    var rl = readline.createInterface({
      input: require('fs').createReadStream(path.resolve(__dirname, './weather.dat'))
    });

    rl.on('line', function (line) {
      console.log('Line from file:', line);
    });
  });
};

module.exports = WeatherData;
