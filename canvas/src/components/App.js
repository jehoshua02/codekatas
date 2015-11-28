var React = require('react');
var ReactDOM = require('react-dom');
var BasicCanvasExamples = require('components/BasicCanvasExamples');
var CanvasClock = require('components/CanvasClock');
var KaitlynCanvas = require('components/KaitlynCanvas');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <KaitlynCanvas />
        </div>
        <div>
          <CanvasClock />
        </div>
        <div>
          <BasicCanvasExamples />
        </div>
      </div>
    );
  }
});

module.exports = App;
