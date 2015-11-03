var path = require('path');
var FootballData = require('./FootballData');

describe('FootballData', function () {
  describe('teamWithSmallestSpread', function () {
    it('should return correct team', function () {
      var data = new FootballData(path.resolve(__dirname, './football.dat'));
      return data.teamWithSmallestSpread().should.eventually.become({
        number: '8.',
        team: 'Aston_Villa',
        p: '38',
        w: '12',
        l: '14',
        d: '12',
        f: '46',
        a: '47',
        pts: '50',
      });
    });
  });
});
