function RangeSeq(start, end) {
  this._position = start;
  this._end = end;
}

RangeSeq.prototype.next = function () {
  var next = this._position;
  this._position++;
  return next;
};

RangeSeq.prototype.more = function() {
  return this._position <= this._end;
};

module.exports = RangeSeq;
