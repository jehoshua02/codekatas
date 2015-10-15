module.exports.bits = function howManyBits(value) {
  return value.toString(2).length;
}

module.exports.contactsSpace = function (count) {
  var contact = {
    name: 'Joshua Kahapea Stoutenburg',
    address: '12345 Whatever Way, SomewhereInTheMiddleOfNoWhere, UT, 84111',
    phone: 1234567890
  };

  var spaceForOneContact = Object.keys(contact).map(function (key) {
    return contact[key].toString().length * 2;
  }).reduce(function (prev, next) {
    return prev + next;
  });

  return spaceForOneContact * count;
}
