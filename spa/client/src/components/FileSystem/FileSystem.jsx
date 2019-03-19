import React, { Component } from 'react'
import File from './File'
import './fileSystem.css'
import addFileIcon from '../../assets/icons/icon-addFile.svg'

class FileSystem extends Component {
  render() {

    let fileList = this.props.fileList.map(file => {
      console.log({ ...file })
      return (
        <File {...file} />
      )
    })

    console.log(this.props.fileList)

    return (
      <div className="fileSystem__container">
        <p>Files</p>
        <div className="addFile__container">
          <img className="addFile" src={addFileIcon}></img>
        </div>
        <div className="fileList__container">
          {fileList}
        </div>
      </div>
    )
  }
}

export default FileSystem