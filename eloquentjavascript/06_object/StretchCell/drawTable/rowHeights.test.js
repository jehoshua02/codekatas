var rowHeights = require('./rowHeights');
var dataTable = require('./dataTable');
var data = require('./test-data');

describe('rowHeights', function () {
  it('should return correct heights for test data', function () {
    rowHeights(dataTable(data)).should.eql([ 2, 1, 1, 1, 1, 1, 1, 1 ]);
  });
});
