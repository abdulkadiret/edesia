import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.status}</p>
      </div>
    );
  }
}

export default App;
