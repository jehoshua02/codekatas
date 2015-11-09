var Vector = function (x, y) {
  Object.defineProperty(this, 'x', {
    get: function() { return x; }
  });

  Object.defineProperty(this, 'y', {
    get: function() { return y; }
  });
};

Vector.prototype.toString = function () {
  return 'Vector{x: ' + this.x + ', y: ' + this.y + '}';
};

Vector.prototype.plus = function (that) {
  return new Vector(this.x + that.x, this.y + that.y);
}

Vector.prototype.minus = function (that) {
  return new Vector(this.x - that.x, this.y - that.y);
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function () {
    // a^2 + b^2 = c^2
    // c = sqrt(a^2 + b^2);
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
});

module.exports = Vector;
