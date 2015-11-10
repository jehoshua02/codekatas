var sinon = require('sinon');
var logFive = require('./logFive');
var RangeSeq = require('./RangeSeq');

describe('logFive', function () {
  it('should log five items from sequence', function () {
    var spy = sinon.spy();
    var log = console.log;
    console.log = spy;
    logFive(new RangeSeq(1, 5));
    console.log = log;

    spy.callCount.should.equal(5);
    spy.getCall(0).calledWithExactly(1);
    spy.getCall(1).calledWithExactly(2);
    spy.getCall(2).calledWithExactly(3);
    spy.getCall(3).calledWithExactly(4);
    spy.getCall(4).calledWithExactly(5);
  });
});
