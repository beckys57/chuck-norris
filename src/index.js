import React from 'react';
//import '../css/style.css';


/*eslint-disable*/

var quotes=quoteInit()


//Getting quotes
function quoteInit(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.icndb.com/jokes', false);
  
  request.send();
  if(!request.status == 200){
    return "Could not connect"
  }
  
  var quotes = JSON.parse(request.response)
  var strippedQuotes = []
  quotes.value.forEach(function(quote){
    strippedQuotes.push(quote.joke)
  })
  console.log("Value", request.status, quotes.value, strippedQuotes[0])
  return strippedQuotes;
}

//Uses theysaidso, ran out after 10 ad day
//quoteInit2();
function quoteInit2(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.theysaidso.com/qod.js', false);
  
  request.send();
  if(!request.status == 200){
    return "Could not connect"
  }
  
  var quotes = JSON.parse(request.response)
  var strippedQuotes = []
  quotes.value.forEach(function(quote){
    strippedQuotes.push(quote.joke)
  })
  console.log("Value", quotes, request.status, quotes.value, strippedQuotes[0])
  return strippedQuotes;
}

function quoteInit3(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://www.iheartquotes.com/api', false);
  
  request.send();
  if(!request.status == 200){
    return "Could not connect"
  }
  
  var quotes = JSON.parse(request.response)
  var strippedQuotes = []
  quotes.value.forEach(function(quote){
    strippedQuotes.push(quote.joke)
  })
  console.log("Value", quotes, request.status, quotes.value, strippedQuotes[0])
  return strippedQuotes;
}


var Quote = React.createClass({
  render: function(){
    return (
      <span className="quote">"{this.props.content}"</span>
      )
  }
})

var Author = React.createClass({
  render: function(){
    return (
        <span className="author">~ {this.props.content}</span>
      )
  }
})

var App = React.createClass({
    getInitialState: function() {
      return {
        qIndex: 0
      };
    },
    newNum: function(){
      var max = quotes.length
      this.setState({
        qIndex: Math.floor(Math.random() * (max))
      });
      console.log(this.state.qIndex)
    },
    render: function() {
      var quote = quotes[this.state.qIndex];
      console.log("quote", quote)
        return (
          <div>
            <Quote content={quote} />
            <Author content="Amos Dogg" />
            <QuoteButton hit={this.newNum} />
            <div>
              <span>{this.state.count}</span>
              
            </div>
          </div>
        );
    }
});

var QuoteButton = React.createClass({
  noo: function(){
    console.log("HI")
  },
  render: function(){
    return (
      <button onClick={this.props.hit} className="new">New Quote</button>
    )
  }
})
 
// get the div with id = 'app'
var appDiv = document.getElementById('app');

// use the render method of React to render our App component to the div
React.render(<App />, appDiv);



