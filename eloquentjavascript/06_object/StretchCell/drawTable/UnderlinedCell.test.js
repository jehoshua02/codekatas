var UnderlinedCell = require('./UnderlinedCell');
var TextCell = require('./TextCell');

describe('UnderlinedCell', function () {
  describe('minWidth', function () {
    it('should return 9 for "hello\\nwooooorld"', function () {
      new UnderlinedCell(new TextCell('hello\nwooooorld')).minWidth().should.equal(9);
    });

    it('should return 5 for "hello"', function () {
      new UnderlinedCell(new TextCell("hello")).minWidth().should.equal(5);
    });
  });

  describe('minHeight', function () {
    it('should return 3 for "hello\\nwooooorld"', function () {
      new UnderlinedCell(new TextCell('hello\nwooooorld')).minHeight().should.equal(3);
    });

    it('should return 2 for "hello"', function () {
      new UnderlinedCell(new TextCell('hello')).minHeight().should.equal(2);
    });
  });

  describe('draw', function () {
    it('should draw cell with padded lines and underline', function () {
      new UnderlinedCell(new TextCell('hello\nwooooorld')).draw(9, 3).should.eql([
        'hello    ',
        'wooooorld',
        '---------',
      ]);
    });
  });
});
