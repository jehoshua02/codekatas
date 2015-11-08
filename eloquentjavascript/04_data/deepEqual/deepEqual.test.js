var deepEqual = require('./deepEqual');

describe('deepEqual', function () {
  var obj = {here: {is: "an"}, object: 2};

  it('should consider obj equal to obj.', function () {
    deepEqual(obj, obj).should.be.true;
  });

  it('should consider obj not equal to some other object.', function () {
    deepEqual(obj, {here: 1, object: 2}).should.be.false;
  });

  it('should consider two objects equal if they have all same properties.', function () {
    deepEqual(obj, {here: {is: "an"}, object: 2}).should.be.true;
  });
});
