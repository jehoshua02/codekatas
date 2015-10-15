module.exports = function chop(needle, haystack) {
  if (haystack.length === 0) {
    return -1;
  }

  var minIndex = 0;
  var maxIndex = haystack.length - 1;
  var index, item;

  while (true) {
    index = Math.floor((maxIndex - minIndex) / 2) + minIndex;
    item = haystack[index];

    if (needle === item) {
      return index;
    }

    if (maxIndex === minIndex) {
      return -1;
    }

    if (needle < item) {
      maxIndex = index;
    } else if (needle > item) {
      minIndex = index + 1;
    }
  }
};
