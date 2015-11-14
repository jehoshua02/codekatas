var WallFlower = require('./WallFlower');
var dirPlus = require('../dirPlus');

describe('WallFlower', function () {
  describe('act', function () {

    it('should turn left', scenario({
      input: {dir: 'n', backLeft: '#', space: 'w'}, expected: 'w'
    }));

    it('should turn slight left', scenario({
      input: {dir: 'n', backLeft: '#', space: 'nw'}, expected: 'nw'
    }));

    it('should go straight (wall detected)', scenario({
      input: {dir: 'n', backLeft: '#', space: 'n'}, expected: 'n'
    }));

    it('should go straight (no wall detected)', scenario({
      input: {dir: 'n', backLeft: ' ', space: 'n'}, expected: 'n'
    }));

    it('should turn slight right', scenario({
      input: {dir: 'n', backLeft: '#', space: 'ne'}, expected: 'ne'
    }));

    it('should turn slight right (no wall detected)', scenario({
      input: {dir: 'n', backLeft: ' ', space: 'ne'}, expected: 'ne'
    }));

    it('should turn right', scenario({
      input: {dir: 'n', backLeft: '#', space: 'e'}, expected: 'e'
    }));

    it('should turn right (no wall detected)', scenario({
      input: {dir: 'n', backLeft: ' ', space: 'e'}, expected: 'e'
    }));

    it('should turn back right', scenario({
      input: {dir: 'n', backLeft: '#', space: 'se'}, expected: 'se'
    }));

    it('should turn back right (no wall detected)', scenario({
      input: {dir: 'n', backLeft: ' ', space: 'se'}, expected: 'se'
    }));

    it('should turn back', scenario({
      input: {dir: 'n', backLeft: '#', space: 's'}, expected: 's'
    }));

    it('should turn back (no wall detected)', scenario({
      input: {dir: 'n', backLeft: ' ', space: 's'}, expected: 's'
    }));

    it('should turn back left', scenario({
      input: {dir: 'n', backLeft: ' ', space: 'sw'}, expected: 'sw'
    }));

    function scenario(data) {
      return function () {

        // Arrange

        // set initial direction
        var subject = new WallFlower();
        subject.dir = data.input.dir;

        var view = {
          look: function (dir) {
            if (dir === dirPlus(data.input.dir, -3)) return data.input.backLeft;
            if (dir === data.input.space) return ' ';
            return '#'
          }
        };

        // Act

        var actual = subject.act(view);

        // Assert

        actual.type.should.equal('move');
        actual.direction.should.equal(data.expected);
      };
    }

  });
});
