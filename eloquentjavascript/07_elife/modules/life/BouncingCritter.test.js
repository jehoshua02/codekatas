var proxyquire = require('proxyquire');

describe('BouncingCritter', function () {
  describe('act', function () {

    it('should go straight while there are no obstacles', scenario({
      input: {direction: 'n', look: ' ', find: 'n'}, expected: 'n'
    }));

    it('should turn when obstacle is encountered', scenario({
      input: {direction: 'n', look: '#', find: 'e'}, expected: 'e'
    }));

    function scenario(data) {
      return function () {
        // Arrange

        var stubs = {};

        // mock out randomElement
        stubs['../randomElement'] = function () {
          return data.input.direction;
        };

        // mock out view
        var view = {
          look: function () { return data.input.look; },
          find: function () { return data.input.find; }
        };

        // Act

        var Critter = proxyquire('./BouncingCritter', stubs);
        var critter = new Critter;
        var actual = critter.act(view);

        // Assert

        actual.type.should.equal('move');
        actual.direction.should.eql(data.expected);
      }
    }

  });
});
