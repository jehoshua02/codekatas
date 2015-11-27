var _context = require('../util/context');
var style = require('../util/style');

module.exports = function (node, props) {
  var context = _context(node);
  var x = props.origin.x;
  var y = props.origin.y;
  var width = props.width;
  var height = props.height;

  style(context, props);
  context.fillRect(x, y, width, height);
}
