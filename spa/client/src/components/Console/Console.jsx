import React, { Component } from 'react'
import './console.css'

class Console extends Component {
  render() {
    return (
      <div className="console__container">
        <textArea className="console__form"></textArea>
      </div>
    )
  }
}

export default Console