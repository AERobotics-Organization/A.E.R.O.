import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Terminal from './components/Terminal/Terminal'

const codeURL = "http://localhost:8088/codeAPI"

class App extends Component {

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  postCode = () => {
    axios
      .post(codeURL)
      .then((response) => {
        console.log(response)
      })
    console.log("post malone")

  }

  render() {
    return (
      <div className="App">
        <Terminal postCode={() => this.postCode()} />
      </div>
    );
  }
}

export default App;
