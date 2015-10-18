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
    
    if(quote.joke.length < 169) strippedQuotes.push(quote.joke.replace(/&quot;/g,'"'))
    
  })
  console.log(strippedQuotes)
  
  return strippedQuotes;
}


var Quote = React.createClass({
  render: function(){
    return (
      <span className="wisdom">{this.props.content}</span>
      )
  }
})

var ChuckShot = React.createClass({
  render: function(){
    return(
       <img className="bgImg" src="https://s-media-cache-ak0.pinimg.com/736x/38/d9/33/38d933cf6fd2ed9c6aa6b243bf554759.jpg"/>)
  }
})

var imageCredit = React.createClass({
  render: function(){
    return(
    <span className="source">Image used under a <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0 license</a>. The source is<a href="https://www.flickr.com/photos/92147157@N07/8377019152"> here</a> </span>
      )
  }
})

var App = React.createClass({
    getInitialState: function() {
      return {
        qIndex: this.getNum()
      };
    },
    getNum: function(){
      var max = quotes.length
      return Math.floor(Math.random() * (max))
    },
    setNum: function(){
      this.setState({
        qIndex: this.getNum()
      });
      console.log(this.state.qIndex)
    },
    render: function() {
      var quote = quotes[this.state.qIndex];
      console.log("quote", quote, "length", quote.length)
        return (
          <div className="container">
          
            <h1>Hit me with your Norris stick</h1>
            <div className="quote-container">
              <ChuckShot />
              <Quote content={quote} />
            </div>
            <QuoteButton hit={this.setNum} />
            <span className="source">Image used under a <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0 license</a>. The source is<a href="https://www.flickr.com/photos/92147157@N07/8377019152"> here</a> </span>
          </div>
          
        );
    }
});

var QuoteButton = React.createClass({
  render: function(){
    return (
      <button onClick={this.props.hit} className="more">More Wisdom</button>
    )
  }
})
 
// get the div with id = 'app'
var appDiv = document.getElementById('app');

// use the render method of React to render our App component to the div
React.render(<App />, appDiv);



