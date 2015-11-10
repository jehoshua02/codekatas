var colWidths = require('./colWidths');
var dataTable = require('./dataTable');
var data = require('./test-data');

describe('colWidths', function () {
  it('should return correct widths for test data', function () {
    colWidths(dataTable(data)).should.eql([ 12, 6, 13 ]);
  });
});
