import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { Switch, Route } from 'react-router-dom'
// import FileSystem from './components/FileSystem/FileSystem'
// import Terminal from './components/Terminal/Terminal'
// import Console from './components/Console/Console'
// import Webcam from './components/Webcam/Webcam'
import Site from './Site'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:8088')

const codeURL = "http://localhost:8088/codeAPI"
const terminateURL = "http://localhost:8088/terminate"

class App extends Component {
  state = {
    currentFileName: '',
    currentCode: {},
    currentID: {},
    currentPID: 0,
    fileList: [],
    feed: ``,
    commandLine: []
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
      .then(({ data }) => {
        console.log(data)
        this.setState({
          fileList: data.data,
          currentFileName: data.fileObject.fileName,
          currentCode: data.fileObject.fileContents,
          currentID: data.fileObject.ID,
          currentPID: data.fileObject.PID,
          commandLine: data.commandLine
        }, () => console.log("STATE: ", this.state))
      })
      .catch((err) => {
        console.log(err)
      })

    setTimeout(() => {
      this.retrieveFiles()
    }, 1000)

  }

  listenForImage = () => {
    socket.on('image', (image) => {
      this.setState({
        feed: `data:image/jpeg;base64,${image}`
      })
    })
  }

  terminateProcess = (pid) => {
    axios
      .post(terminateURL, {
        thePID: pid
      })
      .then(response => {
        console.log(response)
      })

  }

  // loadFile = (query, file, code) => {
  //   let currFile = this.state.fileList.find(f => {
  //     return f.ID = query
  //   })
  //   file = currFile.fileName
  //   code = currFile.fileContents
  // }


  componentDidMount() {
    this.listenForImage()
    this.retrieveFiles()
  }

  componentDidUpdate() {
    //this.retrieveFiles()
  }



  render() {
    return (
      <div className="App">
        {/* <FileSystem fileList={this.state.fileList} />
        <Webcam feed={this.state.feed} />
        <Terminal postCode={this.postCode} />
        <Console terminateProcess={this.terminateProcess} PID={this.state.currentPID} commandLine={this.state.commandLine} /> */}
        <Switch>
          <Route exact path='/'
            render={(routeProps) =>
              (<Site {...routeProps}
                fileList={this.state.fileList}
                feed={this.state.feed}
                postCode={this.postCode}
                terminateProcess={this.terminateProcess}
                PID={this.state.currentPID}
                commandLine={this.state.commandLine}
              //loadFile={this.loadFile}
              />)
            }
          />
          <Route path="/script/:id"
            render={(routeProps) =>
              (<Site {...routeProps}
                fileList={this.state.fileList}
                feed={this.state.feed}
                postCode={this.postCode}
                terminateProcess={this.terminateProcess}
                PID={this.state.currentPID}
                commandLine={this.state.commandLine}
              //loadFile={this.loadFile}
              />)
            }
          />
        </Switch>
      </div >
    );
  }
}

export default App;
