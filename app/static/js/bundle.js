(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */
'use strict'
var Header = require('./partials/header')

var App = React.createClass({displayName: "App",
    render: function() {
        return (
            React.createElement("div", {className: "app"}, 
                React.createElement(Header, null)
            )
        )
    }
})

React.render(React.createElement(App, null), document.body)


},{"./partials/header":2}],2:[function(require,module,exports){
module.exports = React.createClass({

    displayName: 'header',

    render: function() {
        return React.createElement("header", {className: "header"})
    }
})

},{}]},{},[1])