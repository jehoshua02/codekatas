var dirPlus = require('./dirPlus');

describe('dirPlus', function () {

  var scenarios = [
    {input: ['n', 0], expected: 'n'},
    {input: ['n', 1], expected: 'ne'},
    {input: ['n', 2], expected: 'e'},
    {input: ['n', 3], expected: 'se'},
    {input: ['n', 4], expected: 's'},
    {input: ['n', 5], expected: 'sw'},
    {input: ['n', 6], expected: 'w'},
    {input: ['n', 7], expected: 'nw'},
    {input: ['n', 8], expected: 'n'},

    {input: ['n', -1], expected: 'nw'},
    {input: ['n', -2], expected: 'w'},
    {input: ['n', -3], expected: 'sw'},
    {input: ['n', -4], expected: 's'},
    {input: ['n', -5], expected: 'se'},
    {input: ['n', -6], expected: 'e'},
    {input: ['n', -7], expected: 'ne'},
    {input: ['n', -8], expected: 'n'},
  ];

  scenarios.forEach(function (scenario) {
    var should = [
      'should return',
      scenario.expected,
      'for',
      JSON.stringify(scenario.input)
    ].join(' ');

    it(should, function () {
      dirPlus.apply(null, scenario.input).should.equal(scenario.expected);
    });
  });

});
