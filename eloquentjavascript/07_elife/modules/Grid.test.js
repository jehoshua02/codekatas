var sinon = require('sinon');
var Grid = require('./Grid');

describe('Grid', function () {
  describe('isInside', function () {

    it('should return true', function () {
      var grid = new Grid(2, 2);
      grid.isInside({x: 0, y: 0}).should.be.true;
      grid.isInside({x: 0, y: 1}).should.be.true;
      grid.isInside({x: 1, y: 0}).should.be.true;
      grid.isInside({x: 1, y: 1}).should.be.true;
    });

    it('should return false', function () {
      var grid = new Grid(2, 2);
      grid.isInside({x: -1, y: -1}).should.be.false;
      grid.isInside({x: 2, y: 2}).should.be.false;
    });

  });

  describe('set/get', function () {
    it('should set and get', function () {
      var grid = new Grid(2, 2);
      grid.set({x: 0, y: 0}, 'hello');
      grid.get({x: 0, y: 0}).should.equal('hello');
    });
  });

  describe('forEach', function () {
    it('should iterate over each occupied space', function () {
      var grid = new Grid(2, 2);
      grid.set({x: 0, y: 0}, 'hello');
      grid.set({x: 0, y: 1}, 'world');
      var spy = sinon.spy();
      grid.forEach(spy);
      spy.callCount.should.equal(2);
      spy.getCall(0).calledWithExactly('hello', {x: 0, y: 0}).should.be.true;
      spy.getCall(1).calledWithExactly('world', {x: 0, y: 1}).should.be.true;
    });
  });

});
