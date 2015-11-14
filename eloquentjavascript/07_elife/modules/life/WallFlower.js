var dirPlus = require('../dirPlus');

function WallFollower() {
  this.dir = "s";
}

WallFollower.prototype.act = function(view) {
  // remember what direction we were going
  var start = this.dir;

  // aim to turn left
  var behindToLeft = view.look(dirPlus(this.dir, -3)) != " ";
  if (behindToLeft)
    start = this.dir = dirPlus(this.dir, -2);

  // or whatever direction we can
  while (view.look(this.dir) != " ") {
    this.dir = dirPlus(this.dir, 1);
    // unless we are completely surrounded
    if (this.dir == start) break;
  }

  return {type: "move", direction: this.dir};
};

module.exports = WallFollower;
