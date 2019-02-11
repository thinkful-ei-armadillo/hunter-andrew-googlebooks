import React from "react";

export default class SearchBar extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const userSearch = document.getElementById("user-search").value;
    this.props.handleSearchTerm(userSearch);
  };

  render() {
    return (
      <div>
        <form
          className="search-form"
          onSubmit={event => this.handleSubmit(event)}
        >
          <input type="text" id="user-search" />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    );
  }
}
