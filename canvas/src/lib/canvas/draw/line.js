var _context = require('../util/context');
var style = require('../util/style');

module.exports = function line(node, props) {
  var context = _context(node);
  var x1 = props.start.x;
  var y1 = props.start.y;
  var x2 = props.end.x;
  var y2 = props.end.y;


  style(context, props);

  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}
