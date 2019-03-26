import React, { Component } from 'react'
import File from './File'
import './fileSystem.css'
import { Link } from 'react-router-dom'
import addFileIcon from '../../assets/icons/icon-addFile.svg'

class FileSystem extends Component {

  componentDidUpdate() {
    console.log('FS UPDATE')
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.fileList !== this.props.fileList
  }

  render() {

    let fileList = this.props.fileList.map(file => {
      let link = "/script/" + file.ID
      return (
        <Link to={link} style={{ textDecoration: 'none' }}>
          <File {...file} />
        </Link>
      )
    })

    return (
      <div className="fileSystem__container">
        <p>Files</p>
        <div className="addFile__container">
          <Link to="/">
            <img className="addFile" src={addFileIcon}></img>
          </Link>
        </div>
        <div className="fileList__container">
          {fileList}
        </div>
      </div>
    )
  }
}

export default FileSystem