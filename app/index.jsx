//import './styles/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingApp from './components/ShoppingApp.jsx';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
jQuery(document).ready(function($) {
$(document).foundation();
});

// Main css
require('style!css!applicationStyles')


ReactDOM.render(<ShoppingApp />, document.getElementById('app'));
