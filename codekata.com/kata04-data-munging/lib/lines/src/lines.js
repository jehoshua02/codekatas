var readline = require('readline');
var fs = require('fs');
var assign = require('object-assign');

module.exports = function lines(props) {
  var _props = assign({
    filename: null,
    line: function () {},
    close: function () {}
  }, props);

  var rl = readline.createInterface({
    input: fs.createReadStream(_props.filename)
  });

  rl.on('line', function (line) {
    _props.line(line);
  });

  rl.on('close', function () {
    _props.close();
  });
}
