import React, { Component } from 'react'
import './fileSystem.css'
import addFileIcon from '../../assets/icons/icon-addFile.svg'

class FileSystem extends Component {
  render() {
    return (
      <div className="fileSystem__container">
        <p>Files</p>
        <div className="addFile__container">
          <img className="addFile" src={addFileIcon}></img>
        </div>
        <p>File1</p>
        <p>File2</p>
        <p>File3</p>
      </div>
    )
  }
}

export default FileSystem