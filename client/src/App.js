import React from "react";
import './App.css';
import College from "./College";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // const [data, setData] = React.useState(null);

  componentDidMount() {
    fetch("/colleges")
      .then((res) => res.json())
      .then((data) => {
        console.log('data=', data)
        this.setState({data: data.map((college) =>
          <College data={college}></College>
        )})
      });
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.data}</p>
      </div>
    )
  }

}

export default App;
