import React, { Component } from "react";

class CollegeRow extends Component {
  doSomething() {
    console.log("I was clicked!");
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.data.name}
        </td>
        <td>
          {this.props.data.city}, {this.props.data.state}
        </td>
        <td>{this.props.data.distance}</td>
        <td>{this.props.data.disqualified_reason}</td>
        <td>{this.props.data.notes}</td>
      </tr>
    );
  }
}

export default CollegeRow; // Don’t forget to use export default!
