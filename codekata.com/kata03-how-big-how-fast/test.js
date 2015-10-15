var bits = require('./');

describe('bits', function () {

  it('should return 1 for 1', function () {
    bits(1).should.equal(1);
  });

  it('should return 2 for 2', function () {
    bits(2).should.equal(2);
  });

  it('should return 2 for 3', function () {
    bits(3).should.equal(2);
  });

  it('should return 3 for 4', function () {
    bits(4).should.equal(3);
  });

  it('should return 3 for 5', function () {
    bits(5).should.equal(3);
  });

  it('should return 3 for 6', function () {
    bits(6).should.equal(3);
  });

  it('should return 3 for 7', function () {
    bits(7).should.equal(3);
  });

  it('should return 3 for 8', function () {
    bits(8).should.equal(4);
  });

  it('should return 5 for 16', function () {
    bits(16).should.equal(5);
  });

  it('should return 6 for 32', function () {
    bits(32).should.equal(6);
  });

  it('should return 7 for 64', function () {
    bits(64).should.equal(7);
  });

  it('should return 8 for 128', function () {
    bits(128).should.equal(8);
  });

  it('should return 10 for 1,000', function () {
    bits(1000).should.equal(10);
  });

  it('should return 20 for 1,000,000', function () {
    bits(1000000).should.equal(20);
  });

  it('should return 30 for 1,000,000,000', function () {
    bits(1000000000).should.equal(30);
  });

  it('should return 40 for 1,000,000,000,000', function () {
    bits(1000000000000).should.equal(40);
  });

  it('should return 43 for 8,000,000,000,000', function () {
    bits(8000000000000).should.equal(43);
  });

});
