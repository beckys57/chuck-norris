import React from 'react';

/*eslint-disable*/


/* 
  
  Greeting component
  receives a prop called name,
  renders a message in a div,
  with that prop.
  
*/

var Greeting = React.createClass({
    render: function() {
        return <div>A {this.props.type} welcome, {this.props.name}. This bit is your react app.</div>
    }
});
 



var App = React.createClass({
    getInitialState: function() {
      return {
        count: 0,
        boom: 'hello'
      };
    },
    render: function() {
        var originalName = 'Beppe' + '?';
        return (
          <div>
            <Greeting name={originalName} type="friendly" />
            <CountButton />
            <div>
              <span>{this.state.count}</span>
              
            </div>
          </div>
        );
    }
});

var CountButton = React.createClass({
  render: function(){
    return (
      <button className="gay">Butt</button>
    )
  }
})



 
// get the div with id = 'app'
var appDiv = document.getElementById('app');

// use the render method of React to render our App component to the div
React.render(<App />, appDiv);



