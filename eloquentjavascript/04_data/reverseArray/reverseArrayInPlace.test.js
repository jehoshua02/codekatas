var reverseArrayInPlace = require('./reverseArrayInPlace');

describe('reverseArrayInPlace', function () {
  it('should reverse [1, 2, 3, 4, 5] to [5, 4, 3, 2, 1] in place.', function () {
    var arr = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arr);
    arr.should.eql([5, 4, 3, 2, 1]);
  });

  it('should handle even length arrays just fine.', function () {
    var arr = [1, 2, 3, 4, 5, 6];
    reverseArrayInPlace(arr);
    arr.should.eql([6, 5, 4, 3, 2, 1]);
  });
});
