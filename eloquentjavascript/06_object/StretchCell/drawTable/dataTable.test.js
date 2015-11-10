var rows = require('./dataTable')(require('./test-data'));
var UnderlinedCell = require('./UnderlinedCell');
var TextCell = require('./TextCell');
var RTextCell = require('./RTextCell');

describe('dataTable', function () {
  it('should return 8 rows for test data', function () {
    rows.length.should.equal(8);
  });

  it('should return rows having 3 columns each for test data', function () {
    rows.every(function (row) {
      return row.length === 3;
    }).should.be.true;
  });

  it('should use UnderlinedCell for headers', function () {
    rows[0].every(function (cell) {
      return cell instanceof UnderlinedCell;
    }).should.be.true;
  });

  it('should use TextCell for text', function () {
    rows.slice(1).every(function (row) {
      return [0, 2].every(function (i) {
        return row[i] instanceof TextCell;
      });
    }).should.be.true;
  });

  it('should use RTextCell for numbers', function () {
    rows.slice(1).every(function (row) {
      return [1].every(function (i) {
        return row[i] instanceof RTextCell;
      });
    }).should.be.true;
  });
});
