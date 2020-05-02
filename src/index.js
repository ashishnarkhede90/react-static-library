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

const Library = () => (
  <div>
    {/* Iterate over the data */}
    <section>
      { BookList.map(book => (
          <section>
            <p><b>Title: {book.title}</b></p>
            <p>by - {book.author}</p>
            <p>Pages: {book.pages}</p>
          </section>
        ))
      }
    </section>
  </div>
)

const App = () => {
  return (
    <Library />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);