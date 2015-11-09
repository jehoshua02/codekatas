module.exports = function every(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}
