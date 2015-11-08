var listToArray = require('./listToArray');

describe('listToArray', function () {
  it('should turn {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}} into [10, 20, 30].', function () {
    listToArray({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}).should.eql([10, 20, 30]);
  });
});
