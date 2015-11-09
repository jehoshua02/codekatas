var Vector = require('./vector');

describe('vector', function () {
  describe('x', function () {
    it('should be readable', function () {
      (new Vector(1, 2)).x.should.equal(1);
    });

    it('should be immutable', function () {
      var vector = new Vector(1, 2);
      vector.x = 5;
      vector.x.should.equal(1);
    });
  });

  describe('y', function () {
    it('should be readable', function () {
      (new Vector(1, 2)).y.should.equal(2);
    });

    it('should be immutable', function () {
      var vector = new Vector(1, 2);
      vector.y = 5;
      vector.y.should.equal(2);
    });
  });

  describe('toString', function () {
    it('should return format like Vector{x: 1, y: 2}', function () {
      (new Vector(1, 2)).toString().should.equal('Vector{x: 1, y: 2}');
    });
  });

  describe('plus', function () {
    it('should return Vector{x: 3, y: 5} for new Vector(1, 2).plus(new Vector(2, 3))', function () {
      (new Vector(1, 2).plus(new Vector(2, 3))).toString().should.equal('Vector{x: 3, y: 5}');
    });
  });

  describe('minus', function () {
    it('should return Vector{x: -1, y: -1} for new Vector(1, 2).minus(new Vector(2, 3))', function () {
      (new Vector(1, 2).minus(new Vector(2, 3))).toString().should.equal('Vector{x: -1, y: -1}');
    });
  });

  describe('length', function () {
    it('should return 5 for new Vector(3, 4).length', function () {
      (new Vector(3, 4).length).should.equal(5);
    });
  });
});
