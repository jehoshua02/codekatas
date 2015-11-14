var Plant = require('./Plant');

describe('Plant', function () {
  describe('act', function () {
    it('should grow', scenario({
      input: {energy: 15, find: 'n'}, expected: {type: 'grow'}
    }));

    it('should reproduce', scenario({
      input: {energy: 16, find: 'n'}, expected: {type: 'reproduce', direction: 'n'}
    }));

    it('should grow instead of reproduce', scenario({
      input: {energy: 16, find: null}, expected: {type: 'grow'}
    }));

    it('should not reproduce or grow', scenario({
      input: {energy: 20, find: null}, expected: undefined
    }));

    function scenario(data) {
      return function () {

        // Arrange

        // mock view.find
        var view = {
          find: function () { return data.input.find; }
        };

        // mock out energy
        var plant = new Plant();
        plant.energy = data.input.energy;

        // Act

        var actual = plant.act(view);

        // Assert

        expect(actual).to.eql(data.expected);
      }
    }

  });
});
