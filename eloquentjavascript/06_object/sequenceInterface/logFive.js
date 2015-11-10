module.exports = function logFive(seq) {
  for (var i = 0; i < 5 && seq.more(); i++) {
    console.log(seq.next());
  }
}
