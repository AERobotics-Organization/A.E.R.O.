import React, { Component } from 'react'
import './webcam.css'


class Webcam extends Component {
  render() {

    return (
      <div className="webcam__container">
        <img className="webcam__feed" alt="" src={this.props.feed}></img>
      </div>
    )
  }
}
export default Webcam