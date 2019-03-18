import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import FileSystem from './components/FileSystem/FileSystem'
import Terminal from './components/Terminal/Terminal'
import Console from './components/Console/Console'

const codeURL = "https://localhost:8088/codeAPI"

class App extends Component {
  state = {
    currentFileName: '',
    currentCode: {},
    currentFileID: {},
    fileList: []
  }

  retrieveFiles = () => {
    axios
      .get(codeURL)
      .then(({ data }) => {
        this.setState({
          fileList: data
        })
      })
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  // postCode = (code) => {
  //   axios
  //     .post(codeURL, {
  //       currentCode: code
  //     })
  //     .then(response => {
  //       console.log(response)
  //       const currentCode = response.data
  //       this.setState({
  //         currentCode
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  render() {
    return (
      <div className="App">
        <FileSystem fileList={this.state.fileList} />
        <Terminal postCode={this.postCode} />
        <Console />
      </div>
    );
  }
}

export default App;
