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
        '1HrP': '',
        'AvDP': '63.6',
        'AvSLP': '1022.7',
        'AvSp': '6.0',
        'Dir': '220',
        'HDDay': '',
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
});
