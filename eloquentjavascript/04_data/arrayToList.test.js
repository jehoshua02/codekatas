var arrayToList = require('./arrayToList');

describe('arrayToList', function () {
  it('should turn [10, 20] into {value: 10, rest: {value: 20, rest: null}}.', function () {
    arrayToList([10, 20]).should.eql({value: 10, rest: {value: 20, rest: null}});
  });

  it('should handle empty array just fine.', function () {
    expect(arrayToList([])).to.be.null;
  });
});
