var React = require('react'); // importa a lib do react
var reactDOM = require('react-dom'); // importa a lib react-dom

var MeuComponente = require('./components/MeuComponente.js');

reactDOM.render(React.createElement(MeuComponente), document.getElementById('app'));