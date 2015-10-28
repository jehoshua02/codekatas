var parseDat = require('./parseDat');

describe('parseDat', function () {
  it('should parse line correctly', function () {
    var scenarios = [
      {
        config: {
          columns: [
            {name: 'number', size: 5},
            {name: 'maxTemp', size: 6},
            {name: 'minTemp', size: 6},
            {name: 'avgTemp', size: 6},
            {name: 'HDDay', size: 7},
            {name: 'AvDP', size: 5},
            {name: '1HrP', size: 5},
            {name: 'TPcpn', size: 6},
            {name: 'WxType', size: 7},
            {name: 'PDir', size: 5},
            {name: 'AvSp', size: 5},
            {name: 'Dir', size: 4},
            {name: 'MxS', size: 4},
            {name: 'SkyC', size: 5},
            {name: 'MxR', size: 4},
            {name: 'MnR', size: 3},
            {name: 'AvSLP', size: 6},
          ]
        },
        lines: [
          {
            input: '   1  88    59    74          53.8       0.00 F       280  9.6 270  17  1.6  93 23 1004.5',
            expected: {
              'number': '1',
              'maxTemp': '88',
              'minTemp': '59',
              'avgTemp': '74',
              'HDDay': null,
              'AvDP': '53.8',
              '1HrP': null,
              'TPcpn': '0.00',
              'WxType': 'F',
              'PDir': '280',
              'AvSp': '9.6',
              'Dir': '270',
              'MxS': '17',
              'SkyC': '1.6',
              'MxR': '93',
              'MnR': '23',
              'AvSLP': '1004.5',
            }
          },
          {
            input: '   3  77    55    66          39.6       0.00         350  5.0 350   9  2.8  59 24 1016.8',
            expected: {
              'number': '3',
              'maxTemp': '77',
              'minTemp': '55',
              'avgTemp': '66',
              'HDDay': null,
              'AvDP': '39.6',
              '1HrP': null,
              'TPcpn': '0.00',
              'WxType': null,
              'PDir': '350',
              'AvSp': '5.0',
              'Dir': '350',
              'MxS': '9',
              'SkyC': '2.8',
              'MxR': '59',
              'MnR': '24',
              'AvSLP': '1016.8',
            }
          },
          {
            input: '   5  90    66    78          68.3       0.00 TFH     220  8.3 260  12  6.9  84 55 1014.4',
            expected: {
              'number': '5',
              'maxTemp': '90',
              'minTemp': '66',
              'avgTemp': '78',
              'HDDay': null,
              'AvDP': '68.3',
              '1HrP': null,
              'TPcpn': '0.00',
              'WxType': 'TFH',
              'PDir': '220',
              'AvSp': '8.3',
              'Dir': '260',
              'MxS': '12',
              'SkyC': '6.9',
              'MxR': '84',
              'MnR': '55',
              'AvSLP': '1014.4',
            }
          },
        ]
      },
      {
        config: {
          columns: [
            {name: 'number', size: 7},
            {name: 'team', size: 16},
            {name: 'p', size: 7},
            {name: 'w', size: 2},
            {name: 'l', size: 4},
            {name: 'd', size: 4},
            {name: 'f', size: 6},
            {name: '_', size: 5, ignore: true},
            {name: 'a', size: 2},
            {name: 'pts', size: 6},
          ]
        },
        lines: [
          {
            input: '     1. Arsenal         38    26   9   3    79  -  36    87',
            expected: {
              number: '1.',
              team: 'Arsenal',
              p: '38',
              w: '26',
              l: '9',
              d: '3',
              f: '79',
              a: '36',
              pts: '87',
            }
          },
          {
            input: '    10. Liverpool       38    24   8   6    67  -  30    80',
            expected: {
              number: '10.',
              team: 'Liverpool',
              p: '38',
              w: '24',
              l: '8',
              d: '6',
              f: '67',
              a: '30',
              pts: '80',
            }
          },
        ]
      },
      {
        config: {
          columns: [
            {name: 'number', size: 7, filter: parseInt},
            {name: 'team', size: 16},
            {name: 'p', size: 7, filter: parseInt},
            {name: 'w', size: 2, filter: parseInt},
            {name: 'l', size: 4, filter: parseInt},
            {name: 'd', size: 4, filter: parseInt},
            {name: 'f', size: 6, filter: parseInt},
            {name: '_', size: 5, ignore: true},
            {name: 'a', size: 2, filter: parseInt},
            {name: 'pts', size: 6, filter: parseInt},
          ]
        },
        lines: [
          {
            input: '    10. Liverpool       38    24   8   6    67  -  30    80',
            expected: {
              number: 10,
              team: 'Liverpool',
              p: 38,
              w: 24,
              l: 8,
              d: 6,
              f: 67,
              a: 30,
              pts: 80,
            }
          },
        ]
      }
    ];

    scenarios.forEach(function (scenario) {
      var parse = parseDat.bind(null, scenario.config);
      scenario.lines.forEach(function (line) {
        var actual = parse(line.input);
        actual.should.eql(line.expected);
      });
    });
  });
});
