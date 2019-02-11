import React from "react";

export default class PrintType extends React.Component {
    handleChange = e => {
        e.preventDefault();
        const userType = document.getElementById("dropdown").value;
        this.props.handlePrintType(userType);
      };
    
      render() {
        return (
            <select id="dropdown" name="types" onChange={event => this.handleChange(event)}>
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>
        );
      }
}