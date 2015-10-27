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
            input: '   2  79    63    71          46.5       0.00         330  8.7 340  23  3.3  70 28 1004.5',
            expected: {
              'number': '2',
              'maxTemp': '79',
              'minTemp': '63',
              'avgTemp': '71',
              'HDDay': null,
              'AvDP': '46.5',
              '1HrP': null,
              'TPcpn': '0.00',
              'WxType': null,
              'PDir': '330',
              'AvSp': '8.7',
              'Dir': '340',
              'MxS': '23',
              'SkyC': '3.3',
              'MxR': '70',
              'MnR': '28',
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
            input: '   4  77    59    68          51.1       0.00         110  9.1 130  12  8.6  62 40 1021.1',
            expected: {
              'number': '4',
              'maxTemp': '77',
              'minTemp': '59',
              'avgTemp': '68',
              'HDDay': null,
              'AvDP': '51.1',
              '1HrP': null,
              'TPcpn': '0.00',
              'WxType': null,
              'PDir': '110',
              'AvSp': '9.1',
              'Dir': '130',
              'MxS': '12',
              'SkyC': '8.6',
              'MxR': '62',
              'MnR': '40',
              'AvSLP': '1021.1',
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
          {
            input: '   6  81    61    71          63.7       0.00 RFH     030  6.2 030  13  9.7  93 60 1012.7',
            expected: {
              'number': '6',
              'maxTemp': '81',
              'minTemp': '61',
              'avgTemp': '71',
              'HDDay': null,
              'AvDP': '63.7',
              '1HrP': null,
              'TPcpn': '0.00',
              'WxType': 'RFH',
              'PDir': '030',
              'AvSp': '6.2',
              'Dir': '030',
              'MxS': '13',
              'SkyC': '9.7',
              'MxR': '93',
              'MnR': '60',
              'AvSLP': '1012.7',
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
            {name: '_', size: 5},
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
            input: '     2. Liverpool       38    24   8   6    67  -  30    80',
            expected: {
            }
          },
          {
            input: '     3. Manchester_U    38    24   5   9    87  -  45    77',
            expected: {
            }
          },
          {
            input: '     4. Newcastle       38    21   8   9    74  -  52    71',
            expected: {
            }
          },
          {
            input: '     5. Leeds           38    18  12   8    53  -  37    66',
            expected: {
            }
          },
          {
            input: '     6. Chelsea         38    17  13   8    66  -  38    64',
            expected: {
            }
          },
          {
            input: '     7. West_Ham        38    15   8  15    48  -  57    53',
            expected: {
            }
          },
          {
            input: '     8. Aston_Villa     38    12  14  12    46  -  47    50',
            expected: {
            }
          },
          {
            input: '     9. Tottenham       38    14   8  16    49  -  53    50',
            expected: {
            }
          },
          {
            input: '    10. Blackburn       38    12  10  16    55  -  51    46',
            expected: {
            }
          },
          {
            input: '    11. Southampton     38    12   9  17    46  -  54    45',
            expected: {
            }
          },
          {
            input: '    12. Middlesbrough   38    12   9  17    35  -  47    45',
            expected: {
            }
          },
          {
            input: '    13. Fulham          38    10  14  14    36  -  44    44',
            expected: {
            }
          },
          {
            input: '    14. Charlton        38    10  14  14    38  -  49    44',
            expected: {
            }
          },
          {
            input: '    15. Everton         38    11  10  17    45  -  57    43',
            expected: {
            }
          },
          {
            input: '    16. Bolton          38     9  13  16    44  -  62    40',
            expected: {
            }
          },
          {
            input: '    17. Sunderland      38    10  10  18    29  -  51    40',
            expected: {
            }
          },
          {
            input: '    18. Ipswich         38     9   9  20    41  -  64    36',
            expected: {
            }
          },
          {
            input: '    19. Derby           38     8   6  24    33  -  63    30',
            expected: {
            }
          },
          {
            input: '    20. Leicester       38     5  13  20    30  -  64    28',
            expected: {
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
