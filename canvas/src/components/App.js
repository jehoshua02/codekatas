var React = require('react');
var ReactDOM = require('react-dom');
var BasicCanvasExamples = require('components/BasicCanvasExamples');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <BasicCanvasExamples />
      </div>
    );
  }
});

module.exports = App;
