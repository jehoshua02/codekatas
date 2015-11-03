var path = require('path');
var FootballData = require('src/WeatherData');

var data = new WeatherData(path.resolve(__dirname, './weather.dat'));
data.dayWithSmallestSpread().then(function (day) {
  console.log(day);
}).catch(function (err) {
  // TODO
});
