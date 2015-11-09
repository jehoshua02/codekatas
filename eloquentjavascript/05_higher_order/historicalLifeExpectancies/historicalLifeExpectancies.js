var average = require('../lib/average');

module.exports = function historicalLifeExpectancies(ancestry) {
  var groups = groupBy(ancestry, century);
  for (var key in groups) {
    var group = groups[key];
    groups[key] = Math.round(average(group.map(age)) * 10) / 10;
  }
  return groups;
}

function groupBy(array, groupName) {
  var groups = {};
  array.forEach(function (item) {
    var key = groupName(item);
    if (!(key in groups)) {
      groups[key] = [];
    }
    groups[key].push(item);
  });
  return groups;
}

function century(person) {
  return Math.ceil(person.died / 100);
}

function age(person) {
  return person.died - person.born;
}
