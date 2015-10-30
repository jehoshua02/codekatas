var path = require('path');
var lines = require('./lines');

describe('lines', function () {
  it('should read all the lines', function (done) {
    var expected = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six'
    ];

    var actual = [];
    console.log(path.resolve(__dirname, './lines.test.data.txt'));
    lines({
      filename: path.resolve(__dirname, './lines.test.data.txt'),
      line: function (line) {
        actual.push(line);
      },
      close: function () {
        actual.should.eql(expected);
        done();
      }
    });
  });
});
