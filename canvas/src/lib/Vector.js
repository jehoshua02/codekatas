function Vector(x, y) {
  Object.defineProperty(this, 'x', {
    get: function () { return x; }
  });
  Object.defineProperty(this, 'y', {
    get: function () { return y; }
  });
}

module.exports = Vector;
