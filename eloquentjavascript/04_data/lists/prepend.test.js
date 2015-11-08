var prepend = require('./prepend');

describe('prepend', function () {
  it('should return {value: 10, rest: {value: 20, rest: null}} for prepend(10, prepend(20, null)).', function () {
    prepend(10, prepend(20, null)).should.eql({value: 10, rest: {value: 20, rest: null}});
  });
});
