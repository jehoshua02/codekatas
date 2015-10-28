describe('FileReader', function () {
  it('should read one line at a time', function () {
    var actual = [];

    var reader = new FileReader;
    reader.forEach(function (line, index) {
      actual.push(line);
    });

    var expected = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six'
    ];

    actual.should.eventually.become(expected);
  });
});
