var React = require('react');
var ReactDOM = require('react-dom');

var CubeCanvas = React.createClass({
  render: function () {
    return (
      <canvas id="canvas" width='600' height='600' style={{backgroundColor: '#333'}}></canvas>
    );
  }
});

module.exports = CubeCanvas;
