var nth = require('./nth');
var arrayToList = require('./arrayToList');

describe('nth', function () {
  it('should return 20 for nth(arrayToList([10, 20, 30]), 1)', function () {
    nth(arrayToList([10, 20, 30]), 1).should.equal(20);
  });

  it('should return 30 for nth(arrayToList([10, 20, 30]), 2)', function () {
    nth(arrayToList([10, 20, 30]), 2).should.equal(30);
  });

  it('should return 10 for nth(arrayToList([10, 20, 30]), 0)', function () {
    nth(arrayToList([10, 20, 30]), 0).should.equal(10);
  });
});

describe('nth.recursive', function () {
  it('should return 20 for nth(arrayToList([10, 20, 30]), 1)', function () {
    nth.recursive(arrayToList([10, 20, 30]), 1).should.equal(20);
  });

  it('should return 30 for nth(arrayToList([10, 20, 30]), 2)', function () {
    nth.recursive(arrayToList([10, 20, 30]), 2).should.equal(30);
  });

  it('should return 10 for nth(arrayToList([10, 20, 30]), 0)', function () {
    nth.recursive(arrayToList([10, 20, 30]), 0).should.equal(10);
  });
});
