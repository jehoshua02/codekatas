var linearGradient = require('../gradient/linear');
var radialGradient = require('../gradient/radial');

var ignored = [
  'stroke'
];

module.exports = function (context, props) {
  var style = {};

  for (var key in props) {
    var value = props[key];

    if (key === 'linearGradient') {
      key = 'fillStyle';
      value = linearGradient(context, value);
    }

    if (key === 'radialGradient') {
      key = 'fillStyle';
      value = radialGradient(context, value);
    }

    if (ignored.indexOf(key) !== -1) {
      continue;
    }

    if (key in context) {
      style[key] = value;
    }
  }

  Object.assign(context, style);

  return style;
}
