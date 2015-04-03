/** @jsx React.DOM */
'use strict'
var Header = require('./partials/header')

var App = React.createClass({
    render: function() {
        return (
            <div className = "app">
                <Header />
            </div>
        )
    }
})

React.render(<App />, document.body)
