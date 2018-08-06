import React, { Component } from "react";

class Home extends Component {
  state = {
    status: ""
  };
  componentDidMount() {
    fetch("http://localhost:4000/api/status")
      .then(res => res.json())
      .then(data => {
        this.setState({
          status: JSON.stringify(data)
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Edesia</h1>
        </header>
        <p className="App-intro">{this.state.status}</p>
      </div>
    );
  }
}

export default Home;
