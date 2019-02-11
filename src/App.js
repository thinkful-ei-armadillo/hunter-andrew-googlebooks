import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import PrintType from "./components/PrintType";
import BookType from "./components/BookType";
import './App.css';
// const ApiKey = "AIzaSyARz0BlFDU_2oruYz0gzwEbTSWL5MH6sow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchName: null
    };
  }

  handleSearchTerm = search => {
      this.setState({searchName: search});
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}+intitle=${search}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          books: data
        })
      )
  };

  handlePrintType = type => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchName}+intitle=${this.state.searchName}&printType=${type}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          books: data
        })
      );
  };

  handleBookType = type => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchName}+intitle=${this.state.searchName}&filter=${type}`;
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
        <div className="filters">
          <PrintType handlePrintType={this.handlePrintType}/>
          <BookType handleBookType={this.handleBookType}/>
        </div>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
