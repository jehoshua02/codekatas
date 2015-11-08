var reverseArray = require('./reverseArray');

describe('reverseArray', function () {
  it('should reverse [\'A\', \'B\', \'C\'] as [\'C\', \'B\', \'A\'].', function () {
    reverseArray(['A', 'B', 'C']).should.eql(['C', 'B', 'A']);
  });

  it('should return a new array instead of modifying existing array.', function () {
    var arr = ['A', 'B', 'C'];
    reverseArray(arr);
    arr.should.eql(['A', 'B', 'C']);
  });

  it('should handle empty array just fine.', function () {
    reverseArray([]).should.eql([]);
  });
});
