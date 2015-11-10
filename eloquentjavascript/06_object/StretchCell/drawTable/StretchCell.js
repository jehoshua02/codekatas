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
  var line = repeat(' ', width);
  var lines = this.inner.draw(width, height);

  while (lines.length < height) {
    lines.push(line);
  }

  return lines;
};

module.exports = StretchCell;
