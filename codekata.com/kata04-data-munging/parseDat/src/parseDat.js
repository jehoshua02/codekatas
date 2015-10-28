module.exports = function parseDat(config, line) {
  var dat = {};
  var offset = 0;
  config.columns.forEach(function (column) {
    if (column.ignore !== true) {
      var value = line.slice(offset, offset + column.size).trim();
      if (typeof column.filter === 'function') {
        value = column.filter(value);
      }
      dat[column.name] = value === '' ? null : value;
    }
    offset += column.size;
  });
  return dat;
};
