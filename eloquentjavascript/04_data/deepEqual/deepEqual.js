module.exports = function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (!isObject(a) || !isObject(b)) {
    return false;
  }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  var keys = unique(aKeys.concat(bKeys));

  for (var i = 0; i < aKeys.length; i++) {
    var key = keys[i];
    if (
      !a[key] || !b[key]
      || !deepEqual(a[key], b[key])
    ) {
      return false;
    }
  }

  return true;
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}

function unique(arr) {
  return arr.filter(function(value, index, parent) {
    return parent.indexOf(value) === index;
  });
}
