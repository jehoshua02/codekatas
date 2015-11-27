module.exports = {
  clear: require('./clear'),
  height: require('./height'),
  width: require('./width'),
  gradient: {
    linear: require('./gradient/linear'),
  },
  draw: {
    arc: require('./draw/arc'),
    line: require('./draw/line'),
    rect: require('./draw/rect'),
    text: require('./draw/text'),
  },
};
