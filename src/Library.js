import React, {Component} from 'react';
import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'

// Makes API call to fetch quotes
async function getQuotes() {
    const result = await fetch('http://philosophy-quotes-api.glitch.me/quotes/');
    return result;
  }
  
// Library class component
class Library extends Component {

    state = { 
      isOpen: false,
      isHiring: true,
      freeBookmarkToday: false
    };
  
    componentDidMount() {
      this.setState({quote: 'Getting a quote...'});
      getQuotes()
        .then(response => response.json())
        .then(data =>  {
          let q = Math.floor(Math.random() * data.length-1) + 1;
          return this.setState({quote: data[q].quote + ' - ' + data[q].source})
        })
    }
  
    // on click handler (callback)
    toggleLibrary = () => {
      console.log(this.state);
      this.setState((state) => ({ isOpen: !state.isOpen }) )
    }
  
    render() {
      return (
        <div>
          <div style={{background: 'Orange', padding: '0.3rem', marginBottom: '10px'}}>
            { this.state.quote }
          </div> 
  
          { this.state.isHiring ? <Hiring /> : <NotHiring /> }
          
          <h4 style={{color: 'white', padding: '0.5rem', background: this.state.isOpen ? 'green': 'red'}}>
            The library {this.state.isOpen ? ' is open.' : ' is not open.'} 
          </h4>
          
          <button onClick={this.toggleLibrary}>{this.state.isOpen ? 'Close' : 'Open'}</button>
          
          {/* Iterate over the data */}
          <section>
            { this.props.books.map(book => (<Book book={book} key={book.title} freeBookmarkToday={this.state.freeBookmarkToday} />)) }
          </section>
        </div>
      )
    }
  }

  
  export default Library;