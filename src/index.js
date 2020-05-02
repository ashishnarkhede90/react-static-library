import React from 'react';
import ReactDOM from 'react-dom';

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
  return (
    <section>
      <p><b>Title: {props.book.title}</b></p>
      <p>by - {props.book.author}</p>
      <p>Pages: {props.book.pages}</p>
    </section>
  )
}

// Library function component
const Library = (props) => {
  console.log(props);
  return (
    <div>
      {/* Iterate over the data */}
      <section>
        { props.books.map(book => (<Book book={book} key={book.title} />)) }
      </section>
    </div>
  )
}

const App = () => {
  return (
    <Library books={BookList}/>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);