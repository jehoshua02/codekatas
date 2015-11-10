var ArraySeq = require('./ArraySeq');

describe('ArraySeq', function () {
  describe('next', function () {
    it('should return next item every time it is called', function () {
      var seq = new ArraySeq([1,2,3]);
      seq.next().should.equal(1);
      seq.next().should.equal(2);
      seq.next().should.equal(3);
    });
  });

  describe('more', function () {
    it('should return false for []', function () {
      var seq = new ArraySeq([]);
      seq.more().should.be.false;
    });

    it('should return true for [1]', function () {
      var seq = new ArraySeq([1]);
      seq.more().should.be.true;
      seq.next();
      seq.more().should.be.false;
    });

    it('should return true, true, false for [1, 2]', function () {
      var seq = new ArraySeq([1, 2]);
      seq.more().should.be.true;
      seq.next();
      seq.more().should.be.true;
      seq.next();
      seq.more().should.be.false;
    });
  });
});
