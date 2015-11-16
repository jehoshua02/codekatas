var sinon = require('sinon');
var actionTypes = require('./actionTypes');

describe('actionTypes', function () {

  describe('grow', function () {
    it('should increase critter energy and return true', function () {
      var critter = {energy: 1};
      actionTypes.grow(critter).should.be.true;
      critter.energy.should.be.gt(1);
    });
  });

  describe('move', function () {
    it('should ...');
  });

  describe('eat', function () {
    // c = checkDestination
    // g = grid.get
    // e = atDest.energy
    //
    // c g e outcome
    // 0 0 0 should return false
    // 0 0 1 should return false
    // 0 1 0 should return false
    // 0 1 1 should return false
    // 1 0 0 should return false
    // 1 0 1 should return false
    // 1 1 1 should return true

    it('should return false {c: 0, g: 0, e: 0}', scenario({
      input: {c: 0, g: 0, e: 0}, expected: false
    }));

    it('should return false {c: 0, g: 0, e: 1}', scenario({
      input: {c: 0, g: 0, e: 1}, expected: false
    }));

    it('should return false {c: 0, g: 1, e: 0}', scenario({
      input: {c: 0, g: 1, e: 0}, expected: false
    }));

    it('should return false {c: 0, g: 1, e: 1}', scenario({
      input: {c: 0, g: 1, e: 1}, expected: false
    }));

    it('should return false {c: 1, g: 0, e: 0}', scenario({
      input: {c: 1, g: 0, e: 0}, expected: false
    }));

    it('should return false {c: 1, g: 0, e: 1}', scenario({
      input: {c: 1, g: 0, e: 1}, expected: false
    }));

    it('should return true {c: 1, g: 1, e: 1}', scenario({
      input: {c: 1, g: 1, e: 1}, expected: true
    }));


    function scenario(data) {
      return function () {

        // Arrange

        // setup args
        var critter = {energy: 1};
        var critterVector = {x: 0, y: 0};
        var action = {type: 'whatever'};

        // mock world
        var foodVector = {x: 0, y: 1};
        var world = {
          checkDestination: function () {
            return data.input.c ? foodVector : null;
          },
          grid: {
            get: function (dest) {
              if (!data.input.g) { return null; }
              if (!data.input.e) { return {}; }
              return {energy: 1};
            },
            set: sinon.spy()
          }
        };

        // Act

        var actual = actionTypes.eat.call(world, critter, critterVector, action);

        // Assert

        actual.should.equal(data.expected);
        if (actual === true) {
          world.grid.set.callCount.should.equal(1);
          world.grid.set.getCall(0).calledWithExactly(foodVector, null).should.be.true;
          critter.energy.should.equal(2);
        } else {
          world.grid.set.callCount.should.equal(0);
          critter.energy.should.equal(1);
        }
      }
    }
  });

  describe('reproduce', function () {
    it('should ...');
  });

});
