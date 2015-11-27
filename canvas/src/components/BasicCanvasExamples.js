var React = require('react');
var ReactDOM = require('react-dom');
var canvas = require('lib/canvas');

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
  }, interval * actions.length);
};

var BasicCanvasExamples = React.createClass({
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
      this._drawCircle,
      this._drawText,
      this._drawStrokeText,
      this._drawLinearGradient,
      this._drawCircularGradient,
      this._drawImg,
    ], 500);
  },

  _clear: function () {
    canvas.clear(this._node());
  },

  _drawRect: function () {
    var width = this._width();
    var height = this._height();
    var scale = 0.8;
    var r = this._centeredRect(0.8);

    canvas.draw.rect(this._node(), {
      origin: r.origin,
      fillStyle: '#FF0000',
      width: r.width,
      height: r.height
    });
  },

  _drawLine: function () {
    canvas.draw.line(this._node(), {
      start: {x: 0, y: 0},
      end: {x: 200, y: 100}
    });
  },

  _drawCircle: function () {
    canvas.draw.arc(this._node(), {
      center: {x: 95, y: 50},
      radius: 40,
      start: 0,
      end: 1
    });
  },

  _drawText: function () {
    canvas.draw.text(this._node(), {
      text: 'Hello World',
      origin: {x: 22, y: 60},
      font: '30px Arial',
      fillStyle: '#fff'
    });
  },

  _drawStrokeText: function () {
    canvas.draw.text(this._node(), {
      text: 'Hello World',
      origin: {x: 22, y: 60},
      font: '30px Arial',
      stroke: true
    });
  },

  _drawLinearGradient: function () {
    var r = this._centeredRect(0.8);

    canvas.draw.rect(this._node(), {
      origin: r.origin,
      width: r.width,
      height: r.height,
      linearGradient: {
        start: {x: 0, y: 0},
        end: {x: 200, y: 0},
        stops: [
          {stop: 0, color: 'red'},
          {stop: 1, color: 'white'}
        ]
      }
    });
  },

  _drawCircularGradient: function () {
    var r = this._centeredRect(0.8);

    canvas.draw.rect(this._node(), {
      origin: r.origin,
      width: r.width,
      height: r.height,
      radialGradient: {
        start: {
          center: {x: 75, y: 50},
          radius: 5
        },
        end: {
          center: {x: 90, y: 60},
          radius: 100
        },
        stops: [
          {stop: 0, color: 'red'},
          {stop: 1, color: 'white'}
        ]
      }
    });
  },

  _drawImg: function () {
    var context = this._context();
    var img = document.createElement('img');
    img.src = 'http://www.w3schools.com/html/img_the_scream.jpg';
    var fit = this._fitHeight(img.width, img.height);
    var origin = this._centered(fit.width, fit.height);
    context.drawImage(img, origin.x, origin.y, fit.width, fit.height);
  },

  _fitHeight: function (width, height) {
    var w = this._width();
    var h = this._height();
    return {
      height: h,
      width: width * h / height
    };
  },

  _centered: function (width, height) {
    return {
      x: (this._width() - width) / 2,
      y: (this._height() - height) / 2
    };
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
  },

  _centeredRect: function (scale) {
    var width = this._width();
    var height = this._height();
    var r = {};
    r.width = width * scale;
    r.height = height * scale;
    r.origin = {
      x: (width - r.width) / 2,
      y: (height - r.height) / 2
    };
    return r;
  }
});

module.exports = BasicCanvasExamples;
