import React from "react";

export default class BookList extends React.Component {
  displayBookList = books => {
    if (!books.items) {
      return "";
    } else {
        
        const newBookList = books.items.map(book => {
            return (
          <li key={book.id}>
            <img
              src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ''}
              alt="book cover"
            />
            <h3>{book.volumeInfo.title ? book.volumeInfo.title : 'No title.'}</h3>
            <h4>{book.volumeInfo.authors ? book.volumeInfo.authors : 'No author.'}</h4>
            <section>{book.saleInfo.listPrice ? '$' + book.saleInfo.listPrice.amount : 'Free'}</section>
            <p>{book.volumeInfo.description ? book.volumeInfo.description : ''}</p>
          </li>
        );
      });
      return newBookList;
    }
  };

  render() {
    return <ul>{this.displayBookList(this.props.books)}</ul>;
  }
}