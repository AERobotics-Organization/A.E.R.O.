import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import FileSystem from './components/FileSystem/FileSystem'
import Terminal from './components/Terminal/Terminal'
import Console from './components/Console/Console'

const codeURL = "http://localhost:8088/codeAPI"

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
        console.log(data)
        this.setState({
          fileList: data
        })
      })
  }

  postCode = (file, code) => {
    if (file === '') {
      file = "index.js"
    }
    axios
      .post(codeURL, {
        currentFile: file,
        currentCode: code
      })
      .then(response => {
        console.log(response)
        const { currentFile, currentCode } = response.data
        this.setState({
          currentFile,
          currentCode
        })
      })
      .catch((err) => {
        console.log(err)
      })

  }

  componentDidMount() {
    this.retrieveFiles()
  }

  componentDidUpdate() {

  }



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
