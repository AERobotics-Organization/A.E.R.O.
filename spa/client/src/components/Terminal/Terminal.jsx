import React, { Component } from 'react'
import './terminal.css'


class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCode: {}
    }
    this.fileInput = React.createRef()
    this.codeInput = React.createRef()
  }

  compileJ5 = () => {
    console.log("Compiling johnny5...")
    this.props.postCode(this.fileInput.value, this.codeInput.value)

  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="terminal__container">
        <form className="terminal__form">
          <input className="fileName__text" ref={val => this.fileInput = val} type="text" name="inputBox" placeholder="File Name"></input>
          <textarea className="form__input" ref={el => this.codeInput = el}></textarea>

          <button className="form__button" type="button" onClick={() => this.compileJ5()}>COMPILE</button>
        </form>
      </div>
    )
  }
}

export default Terminal