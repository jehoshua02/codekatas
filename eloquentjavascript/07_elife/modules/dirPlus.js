var directionNames = require('./directionNames');

function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}

module.exports = dirPlus;
