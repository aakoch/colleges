import React from "react";
import './App.css';
import College from "./components/College";

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
        <div>{this.state.data}</div>
      </div>
    )
  }

}

export default App;
