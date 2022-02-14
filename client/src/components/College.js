import React, { Component } from 'react';
import CollegeLocation from './CollegeLocation';

class College extends Component {
  doSomething() {
    console.log('I was clicked!')
  }
  render() {
    return (
      <div>
        <div className="college-name"><a onClick={this.doSomething}>{this.props.data.name}</a></div>
        <CollegeLocation data={{city: this.props.data.city, state: this.props.data.state, distance: this.props.data.distance}} />
      </div>
    )
  }
}

export default College; // Don’t forget to use export default!