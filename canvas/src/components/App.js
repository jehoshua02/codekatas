var React = require('react');
var ReactDOM = require('react-dom');
var BasicCanvasExamples = require('components/BasicCanvasExamples');
var CanvasClock = require('components/CanvasClock');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <BasicCanvasExamples />
        </div>
        <div>
          <CanvasClock />
        </div>
      </div>
    );
  }
});

module.exports = App;
