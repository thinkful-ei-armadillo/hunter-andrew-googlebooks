import React from "react";

export default class BookList extends React.Component {
  displayBookList = books => {
    if (!books.items) {
      return "";
    } else {
        const newBookList = books.items.map(book => {
        return (
          <li className={book.volumeInfo.title}>
            <img
              src={book.volumeInfo.imageLinks.smallThumbnail}
              alt="picture of book cover"
            />
            <h3>{book.volumeInfo.title}</h3>
            <h4>{book.volumeInfo.authors}</h4>
            <section>price</section>
            <p>{book.volumeInfo.description}</p>
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

{
}
