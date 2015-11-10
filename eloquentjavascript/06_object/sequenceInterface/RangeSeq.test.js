var RangeSeq = require('./RangeSeq');

describe('RangeSeq', function () {
  describe('next', function () {
    it('should return next item every time it is called', function () {
      var seq = new RangeSeq(0, 2);
      seq.next().should.equal(0);
      seq.next().should.equal(1);
      seq.next().should.equal(2);
    });
  });

  describe('more', function () {
    it('should return true, false for [0..0]', function () {
      var seq = new RangeSeq(0, 0);
      seq.more().should.be.true;
      seq.next();
      seq.more().should.be.false;
    });

    it('should return true, true, false for [1..2]', function () {
      var seq = new RangeSeq(1, 2);
      seq.more().should.be.true;
      seq.next();
      seq.more().should.be.true;
      seq.next();
      seq.more().should.be.false;
    });
  });
});
