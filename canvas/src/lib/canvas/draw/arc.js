var _context = require('../util/context');
var style = require('../util/style');

module.exports = function (node, props) {
  var context = _context(node);
  var x = props.center.x;
  var y = props.center.y;
  var radius = props.radius;
  var start = props.start * 2 * Math.PI;
  var end = props.end * 2 * Math.PI;
  var clockwise = props.clockwise || true;

  style(context, props);
  context.beginPath();
  context.arc(x, y, radius, start, end, !clockwise);

  if (props.fillStyle) {
    context.fill();
  }

  if (props.stroke) {
    context.stroke();
  }
}
