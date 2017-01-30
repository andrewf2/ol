import Router from './router.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

//Declare globals for appwide use
window.baseUrl = "http://ec2-54-84-251-148.compute-1.amazonaws.com";
window['_'] = require('lodash');
window['Promise'] = require('bluebird');


document.addEventListener('DOMContentLoaded', function() {
	const appDiv = document.getElementById('content');
	ReactDOM.render(React.createElement(Router),appDiv)
});

