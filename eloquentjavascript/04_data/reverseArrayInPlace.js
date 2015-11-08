module.exports = function reverseArrayInPlace(arr) {
  var limit = Math.floor(arr.length / 2);
  var tmp, b;
  for (var a = 0; a < limit; a++) {
    tmp = arr[a];
    b = arr.length - (a + 1);
    arr[a] = arr[b];
    arr[b] = tmp;
  }
}
