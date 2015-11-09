module.exports = function averageMotherAge(ancestry) {
  var byName = indexByName(ancestry);

  return average(ancestry
    .filter(hasKnownMother.bind(null, byName))
    .filter(hasProp.bind(null, 'born'))
    .filter(motherHasProp.bind(null, byName, 'born'))
    .map(motherAgeAtChildBirth.bind(null, byName)));
}

function motherAgeAtChildBirth(lookup, person) {
  var mother = lookup(person.mother);
  return person.born - mother.born;
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function indexByName(ancestry) {
  var index = {};
  ancestry.forEach(function(person) {
    index[person.name] = person;
  });
  return function byName(name) {
    return name in index ? index[name] : null;
  }
}

function hasKnownMother(lookup, person) {
  return lookup(person.mother) !== null;
}

function motherHasProp(lookup, prop, person) {
  var mother = lookup(person.mother);
  return mother !== null && hasProp(prop, mother);
}

function hasProp(prop, obj) {
  return prop in obj;
}
