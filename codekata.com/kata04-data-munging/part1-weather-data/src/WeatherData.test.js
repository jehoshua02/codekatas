var path = require('path');
var WeatherData = require('./WeatherData');

describe('WeatherData', function () {
  describe('dayWithSmallestSpread', function () {
    it('should return day with smallest spread', function () {
      var data = new WeatherData(path.resolve(__dirname, './WeatherData.test.dat'));
      return data.dayWithSmallestSpread().should.eventually.become({
        'number': '30',
        'minTemp': '89',
        'maxTemp': '90',
        '1HrP': null,
        'AvDP': '63.6',
        'AvSLP': '1022.7',
        'AvSp': '6.0',
        'Dir': '220',
        'HDDay': null,
        'MnR': '41',
        'MxR': '200',
        'MxS': '17',
        'PDir': '240',
        'SkyC': '4.8',
        'TPcpn': '0.00',
        'WxType': 'H',
        'avgTemp': '89.5'
      });
    });
  });
  describe('dayWithLargestSpread', function () {
    it('should return day with largest spread', function () {
      var data = new WeatherData(path.resolve(__dirname, './WeatherData.test.dat'));
      return data.dayWithLargestSpread().should.eventually.become({
        '1HrP': null,
        'AvDP': '61.5',
        'AvSLP': '1018.6',
        'AvSp': '7.6',
        'Dir': '220',
        'HDDay': '6',
        'MnR': '46',
        'MxR': '78',
        'MxS': '12',
        'PDir': '240',
        'SkyC': '6.0',
        'TPcpn': '0.00',
        'WxType': null,
        'avgTemp': '59',
        'maxTemp': '86',
        'minTemp': '32*',
        'number': '9',
      });
    });
  });
});
