describe('flatten exercise', function () {
  it('should flatten array with reduce and concat.', function () {
    [[1, 2, 3], [4, 5], [6]].reduce(function (a, b) {
      return a.concat(b);
    }).should.eql([1, 2, 3, 4, 5, 6]);
  });
});
