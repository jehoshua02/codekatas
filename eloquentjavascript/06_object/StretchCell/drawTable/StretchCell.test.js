var StretchCell = require('./StretchCell');
var TextCell = require('./TextCell');

describe('StretchCell', function () {
  describe('minWidth', function () {
    it('should return 11 despite lesser inner.minWidth', function () {
      new StretchCell(new TextCell('hello\nwooooorld'), 11, 3).minWidth().should.equal(11);
    });

    it('should return inner.minWidth if greater than own minWidth', function () {
      new StretchCell(new TextCell("hello"), 3, 3).minWidth().should.equal(5);
    });
  });

  describe('minHeight', function () {
    it('should return 3 despite lesser inner.minHeight', function () {
      new StretchCell(new TextCell('hello\nwooooorld'), 3, 3).minHeight().should.equal(3);
    });

    it('should return inner.minHeight if greater than own minHeight', function () {
      new StretchCell(new TextCell('hello\nhello\nhello'), 3, 1).minHeight().should.equal(3);
    });
  });

  describe('draw', function () {
    it('should draw cell with padded lines', function () {
      new StretchCell(new TextCell('hello\nwooooorld'), 11, 3).draw(11, 3).should.eql([
        'hello      ',
        'wooooorld  ',
        '           ',
      ]);
    });
  });
});
