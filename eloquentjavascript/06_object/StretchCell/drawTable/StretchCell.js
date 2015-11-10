var repeat = require('./repeat');

var StretchCell = function (inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
};

StretchCell.prototype.minWidth = function() {
  return Math.max(this.inner.minWidth(), this.width);
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.inner.minHeight(), this.height);
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

module.exports = StretchCell;
