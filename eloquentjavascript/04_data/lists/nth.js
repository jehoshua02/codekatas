module.exports = function nth(list, n) {
  for (var node = list; node && n > 0; node = node.rest, n--) {}
  return node.value;
}

module.exports.recursive = function nthRecursive(list, n) {
  if (n === 0) {
    return list.value;
  } else {
    return nthRecursive(list.rest, n - 1);
  }
}
