function ArraySeq(array) {
  this._array = array;
  this._position = 0;
}

ArraySeq.prototype.next = function () {
  var next = this._array[this._position];
  this._position++;
  return next;
};

ArraySeq.prototype.more = function () {
  return this._position < this._array.length;
};

module.exports = ArraySeq;
