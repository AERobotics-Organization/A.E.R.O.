import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Terminal from './components/Terminal/Terminal'

const codeURL = "https://localhost:8088/codeAPI"

class App extends Component {
  state = {
    currentCode: {}
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  // postCode = (code) => {
  // axios
  //   .post(codeURL, {
  //     currentCode: code
  //   })
  //   .then(response => {
  //     console.log(response)
  //     const currentCode = response.data
  //     this.setState({
  //       currentCode
  //     })
  //   })
  // console.log(code)
  // this.setState({
  //   currentCode: code
  // }, () => console.log("state: ", this.state))
  // }

  render() {
    return (
      <div className="App">
        <Terminal />
      </div>
    );
  }
}

export default App;
