import React, { Component } from 'react';

class College extends Component {
  doSomething() {
    console.log('I was clicked!')
  }
  render() {
    return (
      <div>
        <div className="college-name"><a onClick={this.doSomething}>{this.props.data.name}</a></div>
        <div>is located
          {this.props.data.city
            ? <span> in { this.props.data.city }, { this.props.data.state }</span>
            : <span> <em>somewhere</em></span>
          }
        </div>
      </div>
    )
  }
}

export default College; // Don’t forget to use export default!