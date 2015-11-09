var some = require('./some');

describe('some', function () {
  it('should return true for some([NaN, 3, 4], isNaN).', function () {
    some([NaN, 3, 4], isNaN).should.be.true;
  });

  it('should return false for some([2, 3, 4], isNaN).', function () {
    some([2, 3, 4], isNaN).should.be.false;
  });
});
