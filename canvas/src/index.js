var React = require('react');
var ReactDOM = require('react-dom');
var App = require('components/App');
var appendContainer = require('lib/appendContainer');

ReactDOM.render(<App />, appendContainer('app'));
