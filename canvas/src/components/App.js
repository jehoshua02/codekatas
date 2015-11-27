var React = require('react');
var ReactDOM = require('react-dom');

var sequence = function (actions, interval) {
  actions.forEach(function (action, index) {
    var delay = interval * index;
    setTimeout(action, delay);
  });
};

var loop = function (actions, interval) {
  sequence(actions, interval);
  setTimeout(function () {
    loop(actions, interval);
  }, interval * actions.length + interval);
};

var App = React.createClass({
  render: function () {
    return (
      <canvas width='200' height='100' style={{border: '1px solid #000000'}}></canvas>
    );
  },

  componentDidMount: function () {
    loop([
      this._clear,
      this._drawRect,
      this._drawLine,
      this._drawCircle
    ], 500);
  },

  _clear: function () {
    this._context().clearRect(0, 0, this._width(), this._height());
  },

  _drawRect: function () {
    var context = this._context();
    context.fillStyle = '#FF0000';
    context.fillRect(0, 0, 150, 75);
  },

  _drawLine: function () {
    var context = this._context();
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(200, 100);
    context.stroke();
  },

  _drawCircle: function () {
    var context = this._context();
    context.beginPath();
    context.arc(95, 50, 40, 0, 2 * Math.PI);
    context.stroke();
  },

  _context: function () {
    return this._node().getContext('2d');
  },

  _width: function () {
    return this._node().width;
  },

  _height: function () {
    return this._node().height;
  },

  _node: function () {
    return ReactDOM.findDOMNode(this);
  }
});

module.exports = App;
