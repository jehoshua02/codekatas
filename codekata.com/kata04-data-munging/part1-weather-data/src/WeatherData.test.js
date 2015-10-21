var path = require('path');
var WeatherData = require('./WeatherData');

describe('WeatherData', function () {
  describe('dayWithSmallestSpread', function () {
    it('should return day with smallest spread', function (done) {
      var data = new WeatherData(path.resolve(__dirname, './src/WeatherData.test.dat'));
      data.dayWithSmallestSpread().then(function (day) {
        day.should.equal({
          number: 2,
          maxTemperature: 79,
          minTemperature: 78
        });
      });
    });
  });
});
