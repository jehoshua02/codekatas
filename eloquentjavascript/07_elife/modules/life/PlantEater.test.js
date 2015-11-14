var PlantEater = require('./PlantEater');

describe('PlantEater', function () {
  describe('act', function () {

    it('should reproduce (e: 1, p: 1, s: 1)', scenario({
      input: {energy: 61, plant: 'e', space: 'n'}, expected: {type: 'reproduce', direction: 'n'}
    }));

    it('should reproduce (e: 1, p: 0, s: 1)', scenario({
      input: {energy: 61, plant: null, space: 'n'}, expected: {type: 'reproduce', direction: 'n'}
    }));

    it('should move (e: 0, p: 0, s: 1)', scenario({
      input: {energy: 60, plant: null, space: 'n'}, expected: {type: 'move', direction: 'n'}
    }));

    it('should eat (e: 0, p: 1, s: 0)', scenario({
      input: {energy: 60, plant: 'n', space: null}, expected: {type: 'eat', direction: 'n'}
    }));

    it('should eat (e: 0, p: 1, s: 1)', scenario({
      input: {energy: 60, plant: 'n', space: 'e'}, expected: {type: 'eat', direction: 'n'}
    }));

    it('should do nothing (e: 0, p: 0, s: 0)', scenario({
      input: {energy: 60, plant: null, space: null}, expected: undefined
    }));

    it('should do nothing (e: 1, p: 0, s: 0)', scenario({
      input: {energy: 61, plant: null, space: null}, expected: undefined
    }));


    function scenario(data) {
      return function () {

        // Arrange

        // mock energy
        var subject = new PlantEater;
        subject.energy = data.input.energy;

        // mock view
        var view = {
          find: function (char) {
            return {
              ' ': data.input.space,
              '*': data.input.plant
            }[char];
          }
        };

        // Act

        var actual = subject.act(view);

        // Assert

        expect(actual).to.eql(data.expected);
      }
    }

  });
});
