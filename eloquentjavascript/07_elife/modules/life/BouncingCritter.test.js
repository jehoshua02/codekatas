var proxyquire = require('proxyquire');

describe('BouncingCritter', function () {
  describe('act', function () {
    it('should keep going straight while no obstacle', function () {
      // 1. Mock out randomElement(directionNames) to return desired direction.
      // 2. Mock out view.look to return desired symbol.
      // 3. Mock out view.find to return desired direction.
      // 4. Assert expected action is returned.

      // Arrange

      var scenario = {
        input: {
          direction: 'n', /* 1 */
          look: ' ', /* 2 */
          find: 'n', /* 3 */
        },
        expected: 'n' /* 4 */
      };

      var stubs = {};

      // mock out randomElement
      stubs['../randomElement'] = function () {
        return scenario.input.direction;
      };

      // mock out view
      var view = {
        look: function () { return scenario.input.look; },
        find: function () { return scenario.input.find; }
      };

      // Act
      var Critter = proxyquire('./BouncingCritter', stubs);
      var critter = new Critter;
      var actual = critter.act(view);

      // Assert

      actual.type.should.equal('move');
      actual.direction.should.eql(scenario.expected);
    });
  });
});
