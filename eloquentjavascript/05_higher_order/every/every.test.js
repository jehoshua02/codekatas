var every = require('./every');

describe('every', function () {
  it('should return true for every([NaN, NaN, NaN], isNaN).', function () {
    every([NaN, NaN, NaN], isNaN).should.be.true;
  });

  it('should return false for every([NaN, NaN, 4], isNaN).', function () {
    every([NaN, NaN, 4], isNaN).should.be.false;
  });
});
