var historicalLifeExpectancies = require('./historicalLifeExpectancies');

describe('historicalLifeExpectancies', function () {
  it('should produce expected result for example data', function () {
    var ancestry = JSON.parse(require('../ancestry'));
    historicalLifeExpectancies(ancestry).should.eql({
      16: 43.5,
      17: 51.2,
      18: 52.8,
      19: 54.8,
      20: 84.7,
      21: 94,
    });
  });
});
