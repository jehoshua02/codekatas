var _context = require('../util/context');

module.exports = function (context, props) {
  var x1 = props.start.x;
  var y1 = props.start.y;
  var x2 = props.end.x;
  var y2 = props.end.y;
  var stops = props.stops;

  var gradient = context.createLinearGradient(x1, y1, x2, y2);
  stops.forEach(function (stop) {
    gradient.addColorStop(stop.stop, stop.color);
  });

  return gradient;
}
