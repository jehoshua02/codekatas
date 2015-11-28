var React = require('react');
var ReactDOM = require('react-dom');
var canvas = require('lib/canvas');

var CanvasClock = React.createClass({
  render: function () {
    return (
      <canvas id="canvas" width="300" height="300" style={{backgroundColor: '#333'}}></canvas>
    );
  },

  componentDidMount: function () {
    setInterval(this._draw, 33);
  },

  _draw: function () {
    var node = this._node();
    this._layers().forEach(function (layer) {
      canvas.draw[layer.type](node, layer.props);
    }.bind(this));
  },

  _layers: function () {
    return [].concat(
      this._backLayers(),
      this._numberLayers(),
      this._tickLayers(),
      this._handLayers()
    );
  },

  _radius: function () {
    return canvas.height(this._node()) / 2;
  },

  _backLayers: function () {
    var radius = this._radius();

    return [{
      type: 'arc',
      props: {
        center: {x: radius, y: radius},
        radius: radius * 0.95,
        start: 0,
        end: 1,
        fillStyle: 'white',
        radialGradient: {
          start: {
            center: {x: radius, y: radius},
            radius: 0
          },
          end: {
            center: {x: radius, y: radius},
            radius: radius * 0.95
          },
          stops: [
            {stop: 0, color: '#333'},
            {stop: 0.10, color: '#333'},
            {stop: 0.10, color: 'white'},
            {stop: 0.85, color: 'white'},
            {stop: 0.85, color: '#333'},
            {stop: 1, color: '#333'},
          ]
        }
      }
    }];
  },

  _numberLayers: function () {
    var layers = [];
    var radius = this._radius();

    for (var i = 1; i <= 12; i++) {
      layers.push({
        type: 'text',
        props: {
          text: i.toString(),
          origin: this._pointOnCircle({
            origin: {x: radius, y: radius},
            radius: radius * 0.60,
            angle: this._percentToRadians((i - 3) / 12)
          }),
          font: radius * 0.15 + "px arial",
          fillStyle: '#333',
          textBaseline: 'middle',
          textAlign: 'center',
        }
      });
    }

    return layers;
  },

  _tickLayers: function () {
    var layers = [];
    var radius = this._radius();

    for (var i = 1; i <= 60; i++) {
      layers.push({
        type: 'line',
        props: {
          start: this._pointOnCircle({
            origin: {x: radius, y: radius},
            radius: radius * (i % 5 === 0 ? 0.70 : 0.74),
            angle: this._percentToRadians(i / 60)
          }),
          end: this._pointOnCircle({
            origin: {x: radius, y: radius},
            radius: radius * 0.75,
            angle: this._percentToRadians(i / 60)
          })
        }
      });
    }
    return layers;
  },

  _handLayers: function () {
    var radius = this._radius();
    var now = new Date();

    var angles = {};
    angles.second = (this._seconds(now) - 15) / 60;
    angles.minute = (this._minutes(now) - 15) / 60;
    angles.hour = (this._hours(now) - 3) / 12;

    var lengths = {};
    lengths.hour = radius * 0.45;
    lengths.minute = radius * 0.65;
    lengths.second = radius * 0.75;

    var widths = {};
    widths.hour = radius * 0.07;
    widths.minute = radius * 0.07;
    widths.second = radius * 0.02;

    return ['hour', 'minute', 'second'].map(function (unit) {
      return {
        type: 'line',
        props: {
          lineCap: 'round',
          lineWidth: widths[unit],
          strokeStyle: '#333',
          start: {x: radius, y: radius},
          end: this._pointOnCircle({
            origin: {x: radius, y: radius},
            radius: lengths[unit],
            angle: this._percentToRadians(angles[unit])
          })
        }
      }
    }.bind(this));
  },

  _pointOnCircle: function (props) {
    var origin = props.origin;
    var radius = props.radius;
    var angle = props.angle;

    return {
      x: origin.x + radius * Math.cos(angle),
      y: origin.y + radius * Math.sin(angle)
    };
  },

  _hours: function (now) {
    return now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 60 / 60;
  },

  _minutes: function (now) {
    return now.getMinutes() + now.getSeconds() / 60;
  },

  _seconds: function (now) {
    return now.getSeconds() + now.getMilliseconds() / 1000;
  },

  _percentToRadians: function (percent) {
    return percent * 2 * Math.PI;
  },

  _node: function () {
    return ReactDOM.findDOMNode(this);
  }
});

module.exports = CanvasClock;
