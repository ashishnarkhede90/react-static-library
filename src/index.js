import React from 'react';
import {render} from 'react-dom';
import Library from './Library'

const BookList = [
  {
    title: 'A Game of Thrones',
    author: 'George R. R. Martin',
    pages: 694
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    pages: 600
  },
  {
    title: 'The Sworn Sword',
    author: 'George R. R. Martin',
    pages: 800
  }
];
/*
// Book function component
const Book = (props) => {
  let {book, freeBookmarkToday} = props;
  return (
    <section>
      <p><b>Title: {book.title}</b></p>
      <p>by - {book.author}</p>
      <p>Pages: {book.pages}</p>
      <p>Free Bookmark Today: {freeBookmarkToday ? 'yes!' : 'no :('}</p>
    </section>
  )
}

const Hiring = () => {
  return (
    <div>
      The library is hiring. Please check <a href="https://www.mylibrary.com/jobs">Carrers Page</a> for more info.
    </div>
  )
}

const NotHiring = () => {
  return (
    <div>
      The library is currently not hiring. Please check back later for mroe.
    </div>
  )
}

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
        let q = Math.floor(Math.random() * data.length) + 1;
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
        
        <section>
          { this.props.books.map(book => (<Book book={book} key={book.title} freeBookmarkToday={this.state.freeBookmarkToday} />)) }
        </section>
      </div>
    )
  }
}
*/

const App = () => {
  return (
    <Library books={BookList}/>
  )
}

render(
  <App />,
  document.getElementById('root')
);