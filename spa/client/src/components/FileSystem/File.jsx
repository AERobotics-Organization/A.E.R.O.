import React, { Component } from 'react'
import './file.css'

class File extends Component {
  render() {
    const { ...data } = this.props

    return (
      <div className="file__container">
        <p className="file__name">{data.fileName}</p>
      </div>
    )
  }
}

export default File