module.exports = function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    };
  }
  return list;
};
