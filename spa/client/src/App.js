import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import FileSystem from './components/FileSystem/FileSystem'
import Terminal from './components/Terminal/Terminal'
import Console from './components/Console/Console'
import Webcam from './components/Webcam/Webcam'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:8088')
const codeURL = "http://localhost:8088/codeAPI"

class App extends Component {
  state = {
    currentFileName: '',
    currentCode: {},
    currentFileID: {},
    fileList: [],
    feed: ``
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
    socket.on('image', (image) => {
      this.setState({
        feed: `data:image/jpeg;base64,${image}`
      })
    })
  }

  componentDidUpdate() {

  }



  render() {

    // socket.on('image', (image) => {
    //   this.setState({
    //     feed: `data:image/jpeg;base64,${image}`
    //   })
    // })

    return (
      <div className="App">
        <FileSystem fileList={this.state.fileList} />
        <Webcam feed={this.state.feed} />
        <Terminal postCode={this.postCode} />
        <Console />
      </div >
    );
  }
}

export default App;
