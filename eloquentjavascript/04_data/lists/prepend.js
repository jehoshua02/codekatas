module.exports = function prepend(value, list) {
  return {value: value, rest: list};
}
