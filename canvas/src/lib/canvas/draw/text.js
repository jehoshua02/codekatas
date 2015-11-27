var _context = require('../util/context');
var style = require('../util/style');

module.exports = function text(node, props) {
  var context = _context(node);
  var text = props.text;
  var x = props.origin.x;
  var y = props.origin.y;
  var stroke = props.stroke;

  style(context, props);
  context.fillText(text, x, y);

  if (stroke) {
    context.strokeText(text, x, y);
  }
}
