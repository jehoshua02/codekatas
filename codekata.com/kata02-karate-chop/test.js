var chops = require('./');

Object.keys(chops).forEach(function (key) {
  var chop = chops[key];

  describe('chop ' + key, function () {

    it('should return 0 for chop(1, [1])', function () {
      chop(1, [1]).should.equal(0);
    });

    it('should return 0 for chop(1, [1, 3, 5])', function () {
      chop(1, [1, 3, 5]).should.equal(0);
    });

    it('should return 1 for chop(3, [1, 3, 5])', function () {
      chop(3, [1, 3, 5]).should.equal(1);
    });

    it('should return 2 for chop(5, [1, 3, 5])', function () {
      chop(5, [1, 3, 5]).should.equal(2);
    });

    it('should return 0 for chop(1, [1, 3, 5, 7])', function () {
      chop(1, [1, 3, 5, 7]).should.equal(0);
    });

    it('should return 1 for chop(3, [1, 3, 5, 7])', function () {
      chop(3, [1, 3, 5, 7]).should.equal(1);
    });

    it('should return 2 for chop(5, [1, 3, 5, 7])', function () {
      chop(5, [1, 3, 5, 7]).should.equal(2);
    });

    it('should return 3 for chop(7, [1, 3, 5, 7])', function () {
      chop(7, [1, 3, 5, 7]).should.equal(3);
    });

    it('should return -1 for chop(3, [])', function () {
      chop(3, []).should.equal(-1);
    });

    it('should return -1 for chop(0, [1, 3, 5])', function () {
      chop(0, [1, 3, 5]).should.equal(-1);
    });

    it('should return -1 for chop(2, [1, 3, 5])', function () {
      chop(2, [1, 3, 5]).should.equal(-1);
    });

    it('should return -1 for chop(4, [1, 3, 5])', function () {
      chop(4, [1, 3, 5]).should.equal(-1);
    });

    it('should return -1 for chop(6, [1, 3, 5])', function () {
      chop(6, [1, 3, 5]).should.equal(-1);
    });

    it('should return -1 for chop(3, [1])', function () {
      chop(3, [1]).should.equal(-1);
    });

    it('should return -1 for chop(0, [1, 3, 5, 7])', function () {
      chop(0, [1, 3, 5, 7]).should.equal(-1);
    });

    it('should return -1 for chop(2, [1, 3, 5, 7])', function () {
      chop(2, [1, 3, 5, 7]).should.equal(-1);
    });

    it('should return -1 for chop(4, [1, 3, 5, 7])', function () {
      chop(4, [1, 3, 5, 7]).should.equal(-1);
    });

    it('should return -1 for chop(6, [1, 3, 5, 7])', function () {
      chop(6, [1, 3, 5, 7]).should.equal(-1);
    });

    it('should return -1 for chop(8, [1, 3, 5, 7])', function () {
      chop(8, [1, 3, 5, 7]).should.equal(-1);
    });

  });

});
