import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

const ApiKey = "AIzaSyARz0BlFDU_2oruYz0gzwEbTSWL5MH6sow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  handleSearchTerm = search => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          books: data
        })
      );
  };

  render() {
    return (
      <div>
        <h1>Google Book Search</h1>
        <SearchBar handleSearchTerm={this.handleSearchTerm} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
