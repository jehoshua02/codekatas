var RTextCell = require('./RTextCell');

describe('RTextCell', function () {
  describe('minWidth', function () {
    it('should return 9 for "hello\\nwooooorld"', function () {
      new RTextCell('hello\nwooooorld').minWidth().should.equal(9);
    });

    it('should return 5 for "hello"', function () {
      new RTextCell("hello").minWidth().should.equal(5);
    });
  });

  describe('minHeight', function () {
    it('should return 2 for "hello\\nwooooorld"', function () {
      new RTextCell('hello\nwooooorld').minHeight().should.equal(2);
    });

    it('should return 1 for "hello"', function () {
      new RTextCell('hello').minHeight().should.equal(1);
    });
  });

  describe('draw', function () {
    it('should draw cell with padded lines', function () {
      new RTextCell('hello\nwooooorld').draw(9, 2).should.eql([
        '    hello',
        'wooooorld'
      ]);
    });
  });
});
