var valley = new LifelikeWorld([
  "############################",
  "#####                 ######",
  "##   ***                **##",
  "#   *##**         **  O  *##",
  "#    ***     O    ##**    *#",
  "#       O         ##***    #",
  "#                 ##**     #",
  "#   O       #*             #",
  "#*          #**       O    #",
  "#***        ##**    O    **#",
  "##****     ###***       *###",
  "############################"
], {
  "#": Wall,
  "O": PlantEater,
  "*": Plant
});

(function() {
  window.animateWorld = function(world) { new Animated(world); };
})();
