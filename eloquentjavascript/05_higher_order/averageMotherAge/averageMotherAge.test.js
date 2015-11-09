var averageMotherAge = require('./averageMotherAge');

describe('averageMotherAge', function () {
  it('should return 31.2 for example data.', function () {
    var ancestry = JSON.parse(require('./ancestry.js'));
    averageMotherAge(ancestry).should.equal(31.22222222222222);
  });
});
