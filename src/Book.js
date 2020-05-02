import React from 'react';

export const Book = (props) => {
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