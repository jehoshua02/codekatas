var React = require('react');
var ReactDOM = require('react-dom');
var canvas = require('lib/canvas');

function loop(action) {
  setInterval(function () {
    action();
    // loop(action);
  }, 33);
}

var KaitlynCanvas = React.createClass({
  render: function () {
    console.log(document.body.computed, document.body.height);
    return (
      <canvas id="canvas" width='600' height='600' style={{
        backgroundColor: '#333',
      }}></canvas>
    );
  },

  componentDidMount: function () {
    loop(this._draw);
  },

  _draw: function () {
    var node = this._node();
    var radius = Math.sqrt(Math.pow(this._center().x, 2) * 2);
    var center = this._center();
    var angles = [];
    var now = new Date;
    angles.push(now.getMilliseconds() / 1000);
    angles.push(now.getSeconds() / 60 + now.getMilliseconds() / 1000 / 60);

    canvas.clear(node);

    canvas.draw.line(node, {
      start: center,
      end: this._pointOnCircle({
        center: center,
        radius: radius,
        angle: this._percentToRadian(angles[0])
      }),
      strokeStyle: this._randomColor(),
      lineWidth: center.x * 0.02,
      lineCap: 'round',
    });

    canvas.draw.line(node, {
      start: center,
      end: this._pointOnCircle({
        center: center,
        radius: radius,
        angle: this._percentToRadian(1 - angles[1])
      }),
      strokeStyle: this._randomColor(),
      lineWidth: center.x * 0.02,
      lineCap: 'round',
    });

    canvas.draw.arc(node, {
      center: {x: node.width * Math.random(), y: node.height * Math.random()},
      radius: 10,
      start: 0,
      end: 1,
      fillStyle: this._randomColor(),
    });


    var bear = this.bear || {
      origin: null,
      angle: this._percentToRadian(Math.random()),
      img: (function () {
        var img = document.createElement('img');
        img.src = 'http://images.clipartpanda.com/teddy-clipart-bear12.gif';
        img.height = img.height * 0.5;
        img.width = img.width * 0.5;
        return img;
      })(),
      step: 10
    };

    var angle = bear.angle;
    var origin = bear.origin || {
      x: (node.width - bear.img.width) * Math.random(),
      y: (node.height - bear.img.height) * Math.random()
    };

    do {
      var target = this._pointOnCircle({
        center: origin,
        radius: bear.step,
        angle: angle,
      });

      var collision = (
        target.x <= 0
        || target.x + bear.img.width >= node.width
        || target.y <= 0
        || target.y + bear.img.height >= node.height
      );

      if (collision) {
        angle = this._percentToRadian(Math.random());
      }
    } while (collision);

    bear.origin = target;
    bear.angle = angle;
    this.bear = bear;

    var context = node.getContext('2d');
    context.drawImage(bear.img, bear.origin.x, bear.origin.y, bear.img.width, bear.img.height);
  },

  _center: function () {
    var node = this._node();
    return {
      x: node.width / 2,
      y: node.height / 2
    };
  },

  _pointOnCircle: function (props) {
    var center = props.center;
    var angle = props.angle;
    var radius = props.radius;
    return {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle)
    };
  },

  _percentToRadian: function (percent) {
    return percent * 2 * Math.PI;
  },

  _randomColor: function () {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  },

  _node: function () {
    return ReactDOM.findDOMNode(this);
  }
});

module.exports = KaitlynCanvas;
