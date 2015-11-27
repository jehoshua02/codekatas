var width = require('./width');
var height = require('./height');

module.exports = function clear(node) {
  node.getContext('2d').clearRect(0, 0, width(node), height(node));
}
