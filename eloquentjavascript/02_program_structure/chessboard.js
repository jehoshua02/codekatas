var size = 8;
var board = '';
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    board += (i + j) % 2 === 0 ? ' ' : '#';
  }
  board += '\n';
}
console.log(board);
