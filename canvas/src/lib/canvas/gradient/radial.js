var _context = require('../util/context');

module.exports = function (context, props) {
  var x1 = props.start.center.x;
  var y1 = props.start.center.y;
  var r1 = props.start.radius;
  var x2 = props.end.center.x;
  var y2 = props.end.center.y;
  var r2 = props.end.radius;
  var stops = props.stops;

  var gradient = context.createRadialGradient(x1, y1, r1, x2, y2, r2);
  stops.forEach(function (stop) {
    gradient.addColorStop(stop.stop, stop.color);
  });

  return gradient;
}
