import React from "react";

export default class BookType extends React.Component {
    handleChange = e => {
        e.preventDefault();
        const userType = document.getElementById("options").value;
        this.props.handleBookType(userType);
      };
    
      render() {
        return (
            <select id="options" name="types" onChange={event => this.handleChange(event)}>
                <option value="full">No Filter</option>
                <option value="ebooks">All eBooks</option>
                <option value="free-ebooks">Free eBook</option>
            </select>
        );
      }
}