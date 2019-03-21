import React, { Component } from 'react'
import './console.css'

class Console extends Component {
  render() {
    return (
      <div className="console__container">
        <textArea className="console__form"></textArea>
        <button className="terminate__button" type="button" onClick={() => this.props.terminateProcess(this.props.PID)}>TERMINATE</button>
      </div>
    )
  }
}

export default Console