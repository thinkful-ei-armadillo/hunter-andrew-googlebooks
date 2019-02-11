import React from "react";

export default class BookList extends React.Component {
  displayBookList = books => {
    console.log(books);
    const newBookList = books.map(book => {
      return (
        <li className={book.volumeInfo.title}>
          <img
            src={book.imageLinks.smallThumbnail}
            alt="picture of book cover"
          />
          <h3>{book.volumeInfo.title}</h3>
          <h4>{book.volumeInfo.authors}</h4>
          <section>{book.saleInfo.retailPrice.amount}</section>
          <p>{book.volumeInfo.description}</p>
        </li>
      );
    });
    console.log(newBookList);
    return newBookList;
  };

  render() {
    return <ul>{this.displayBookList(this.props.books)}</ul>;
  }
}

{
}
