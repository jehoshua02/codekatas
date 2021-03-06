var React = require('react');
var ReactDOM = require('react-dom');
var randomColor = require('lib/randomColor');

var CubeCanvas = React.createClass({
  render: function () {
    return (
      <canvas ref="canvas" width='800' height='600' style={{backgroundColor: '#333'}}
        onMouseMove={this._handleMouseMove}
        onMouseDown={this._handleMouseDown}
        onMouseUp={this._handleMouseUp}
      ></canvas>
    );
  },

  componentDidMount: function () {
    loop(this._draw);
  },

  _handleMouseMove: function (e) {
    if (!this.drag) {return;}
    if (!this.data) {return;}
    var previous = this.drag;
    var next = this._eventCoords(e);
    var canvas = this.data.canvas;
    var rotateX = 1 - ((next.y - previous.y) / canvas.height() / 2);
    var rotateY = 1 - ((next.x - previous.x) / canvas.width() / 2);

    this.data.rotate[0] += rotateX * 2;
    this.data.rotate[1] += rotateY * 2;
    this.drag = next;
  },

  _handleMouseDown: function (e) {
    var point = this._eventCoords(e);
    this.drag = point;
  },

  _handleMouseUp: function (e) {
    this.drag = null;
  },

  _eventCoords: function (e) {
    var canvas = this.data.canvas;
    var x = (e.clientX - e.target.offsetLeft - canvas.width() / 2);
    var y = (e.clientY - e.target.offsetTop - canvas.height() / 2) * -1;
    return {x: x, y: y};
  },

  _draw: function () {
    // bootstrap
    this.data = this.data || {};
    var cube = this.data.cube || new Cube;
    var rotate = this.data.rotate || [0, 0, 0];
    var canvas = this.data.canvas || new Canvas(this.refs.canvas);

    // rotate
    if (!this.drag) {
      rotate = rotate.map(function (angle, index) {
        return index === 2 ? angle : angle + 0.005;
      });
    }
    cube.rotate.apply(cube, rotate);

    // render
    canvas.clear();
    cube.render(canvas);

    // persist
    this.data = {
      cube: cube,
      rotate: rotate,
      canvas: canvas,
    };
  }
});

function loop(action) {
  window.requestAnimationFrame(function () {
    action();
    loop(action);
  });
}

function Point(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Point.prototype.project = function (viewWidth, viewHeight, fov, viewDistance) {
  var factor, x, y;
  factor = fov / (viewDistance + this.z);
  x = this.x * factor + viewWidth / 2;
  y = this.y * factor + viewHeight / 2;
  return new Point(x, y, this.z);
};

Point.prototype.rotateX = function(angle) {
  var rad, cosa, sina, y, z
  rad = angle * 2 * Math.PI
  cosa = Math.cos(rad)
  sina = Math.sin(rad)
  y = this.y * cosa - this.z * sina
  z = this.y * sina + this.z * cosa
  return new Point(this.x, y, z)
}

Point.prototype.rotateY = function(angle) {
  var rad, cosa, sina, x, z
  rad = angle * 2 * Math.PI
  cosa = Math.cos(rad)
  sina = Math.sin(rad)
  z = this.z * cosa - this.x * sina
  x = this.z * sina + this.x * cosa
  return new Point(x,this.y, z)
}

Point.prototype.rotateZ = function(angle) {
  var rad, cosa, sina, x, y
  rad = angle * 2 * Math.PI
  cosa = Math.cos(rad)
  sina = Math.sin(rad)
  x = this.x * cosa - this.y * sina
  y = this.x * sina + this.y * cosa
  return new Point(x, y, this.z)
}

Point.prototype.rotate = function (angleX, angleY, angleZ) {
  return this.rotateX(angleX).rotateY(angleY).rotateZ(angleZ);
}

function Cube() {
  this.points = [
    new Point(-1,1,-1),
    new Point(1,1,-1),
    new Point(1,-1,-1),
    new Point(-1,-1,-1),
    new Point(-1,1,1),
    new Point(1,1,1),
    new Point(1,-1,1),
    new Point(-1,-1,1),
  ];

  this.faces = [
    [0,1,2,3],
    [1,5,6,2],
    [5,4,7,6],
    [4,0,3,7],
    [0,4,5,1],
    [3,2,6,7]
  ];

  this._rotate = [0, 0, 0];
}

Cube.prototype.rotate = function (angleX, angleY, angleZ) {
  this._rotate[0] = angleX;
  this._rotate[1] = angleY;
  this._rotate[2] = angleZ;
}

Cube.prototype.render = function (canvas) {
  var width = canvas.width();
  var height = canvas.height();
  var context = canvas.context();
  var points = this.points.map(function (point) {
    return point.rotate.apply(point, this._rotate).project(width, height, 300, 3.5);
  }.bind(this));

  for (var i = 0; i < this.faces.length; i++) {
    var face = this.faces[i];

    new Line(points[face[0]], points[face[1]]).render(canvas);
    new Line(points[face[1]], points[face[2]]).render(canvas);
    new Line(points[face[2]], points[face[3]]).render(canvas);
    new Line(points[face[3]], points[face[0]]).render(canvas);
  }
}

function Line(a, b) {
  this.a = a;
  this.b = b;
}

Line.prototype.render = function (canvas) {
  var context = canvas.context();
  context.strokeStyle = randomColor();
  context.lineWidth = 10;
  context.lineCap = 'round';
  context.beginPath();
  context.moveTo(this.a.x, this.a.y);
  context.lineTo(this.b.x, this.b.y);
  context.stroke();
}

function Canvas(node) {
  this.node = node;
}

Canvas.prototype.context = function () {
  return this.node.getContext('2d');
}

Canvas.prototype.width = function () {
  return this.node.width;
}

Canvas.prototype.height = function () {
  return this.node.height;
}

Canvas.prototype.clear = function () {
  this.context().clearRect(0, 0, this.width(), this.height());
}

module.exports = CubeCanvas;
