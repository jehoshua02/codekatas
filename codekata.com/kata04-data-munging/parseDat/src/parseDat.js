module.exports = function parseDat(config, line) {
  var dat = {};
  var offset = 0;
  config.columns.forEach(function (column) {
    if (column.name !== '_') {
      var value = line.slice(offset, offset + column.size).trim();
      dat[column.name] = value === '' ? null : value;
    }
    offset += column.size;
  });
  return dat;
};
