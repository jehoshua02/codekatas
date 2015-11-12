var world = new World([
  "############################",
  "#      #    #      o      ##",
  "#                          #",
  "#          #####           #",
  "##         #   #    ##     #",
  "###           ##     #     #",
  "#           ###      #     #",
  "#   ####                   #",
  "#   ##       o             #",
  "# o  #         o       ### #",
  "#    #                     #",
  "############################"
], {
  "#": Wall,
  "o": BouncingCritter
});

(function() {
  window.animateWorld = function(world) { new Animated(world); };
})();
