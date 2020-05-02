import React from 'react';
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

render(
  <App />,
  document.getElementById('root')
);