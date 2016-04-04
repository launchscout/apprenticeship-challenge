var React = require('react');
var ReactDOM = require('react-dom'); //react-dom renders items to the screen
var ListManager = require('./components/ListManager.jsx');
var Clock = require('./components/Clock.jsx');
var Notes = require('./components/Notes.jsx');

//copy and pasted the top line below to create more lists
ReactDOM.render(<ListManager title="Stocks List" />, document.getElementById('stocks'));
ReactDOM.render(<ListManager title="ETFs List" />, document.getElementById('etfs'));
ReactDOM.render(<ListManager title="Funds List" />, document.getElementById('funds'));

ReactDOM.render(<Notes title="Note Pad" />, document.getElementById('notes'));

ReactDOM.render(<Clock title="Time" />, document.getElementById('clock'));
