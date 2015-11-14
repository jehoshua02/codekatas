var Vector = require('./Vector');

describe('Vector', function () {
  describe('plus', function () {
    it('should add two vectors', function () {
      new Vector(1, 1).plus(new Vector(1, 1)).should.eql(new Vector(2, 2));
    });
  });
});
