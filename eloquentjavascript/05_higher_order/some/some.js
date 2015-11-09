module.exports = function some(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) {
      return true;
    }
  }
  return false;
}
