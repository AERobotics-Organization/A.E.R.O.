import React, { Component } from 'react'
import './terminal.css'

class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCode: {}
    }
    this.textInput = React.createRef()
  }

  compileJ5 = () => {
    //event.preventDefault()
    console.log("Compiling johnny5...")
    console.log(this.props)
    this.props.postCode()
    //this.textInput.value = ""
    // this.setState({
    //   currentCode: this.textInput.value
    // }, () => this.props.postCode(this.state.currentCode))
  }

  render() {
    return (
      <div className="terminal__container">
        <form className="terminal__form">
          <textarea className="form__input" ref={el => this.textInput = el}></textarea>
          <button className="form__button" type="button" onClick={() => this.compileJ5()}>COMPILE</button>
        </form>
      </div>
    )
  }
}

export default Terminal