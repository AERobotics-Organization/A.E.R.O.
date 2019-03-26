import React, { Component } from 'react'
import FileSystem from './components/FileSystem/FileSystem'
import Terminal from './components/Terminal/Terminal'
import Console from './components/Console/Console'
import Webcam from './components/Webcam/Webcam'

class Site extends Component {
  render() {
    return (
      <div>
        <FileSystem fileList={this.props.fileList} />
        <Webcam feed={this.props.feed} />
        <Terminal postCode={this.props.postCode} fileList={this.props.fileList} query={this.props.match.params.id} loadFile={this.props.loadFile} />
        <Console terminateProcess={this.props.terminateProcess} PID={this.props.PID} commandLine={this.props.commandLine} />
      </div>
    )
  }
}
export default Site