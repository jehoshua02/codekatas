function range(start, end, step) {
  var arr = [];
  if (step === undefined) {
    step = start < end ? 1 : -1;
  }
  for (var i = start; step > 0 ? i <= end : i >= end; i += step) {
    arr.push(i);
  }
  return arr;
}

function sum(arr) {
  var number = 0;
  for (var i = 0; i < arr.length; i++) {
    number += arr[i];
  }
  return number;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
