import React, {Component} from 'react';
import {render} from 'react-dom';

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

// Book function component
const Book = (props) => {
  let {title, author, pages} = props.book;
  return (
    <section>
      <p><b>Title: {title}</b></p>
      <p>by - {author}</p>
      <p>Pages: {pages}</p>
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

// Library class component
class Library extends Component {

  state = { 
    isOpen: false,
    isHiring: true
  };

  // on click handler (callback)
  toggleLibrary = () => {
    console.log(this.state);
    this.setState((state) => ({ isOpen: !state.isOpen }) )
  }

  render() {
    return (
      <div>
        { this.state.isHiring ? <Hiring /> : <NotHiring /> }
        <h4 style={{color: 'white', padding: '0.5rem', background: this.state.isOpen ? 'green': 'red'}}>
          The library {this.state.isOpen ? ' is open.' : ' is not open.'} 
        </h4>
        <button onClick={this.toggleLibrary}>{this.state.isOpen ? 'Close' : 'Open'}</button>
        {/* Iterate over the data */}
        <section>
          { this.props.books.map(book => (<Book book={book} key={book.title} />)) }
        </section>
      </div>
    )
  }
}

const App = () => {
  return (
    <Library books={BookList}/>
  )
}

render(
  <App />,
  document.getElementById('root')
);