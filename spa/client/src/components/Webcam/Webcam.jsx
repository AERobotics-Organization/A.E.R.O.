import React, { Component } from 'react'
import './webcam.css'


class Webcam extends Component {
  render() {

    // const imgFeed = document.querySelector('.webcam__feed')
    // imgFeed.src = `data:image/jpeg;base64,${this.props.feed}`

    return (
      <div className="webcam__container">
        <img className="webcam__feed" alt="webcamFeed" src={this.props.feed}></img>
      </div>
    )
  }
}
export default Webcam