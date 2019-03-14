import React, { Component } from 'react'
import axios from 'axios'
import './terminal.css'

const codeURL = "http://localhost:8088/codeAPI"

class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCode: {}
    }
    this.textInput = React.createRef()
  }

  postCode = (code) => {
    axios
      .post(codeURL, {
        currentCode: code
      })
      .then(response => {
        console.log(response)
        const currentCode = response.data
        this.setState({
          currentCode
        })
      })
      .catch((err) => {
        console.log(err)
      })
    // .get(codeURL)
    // .then(({ data }) => {
    //   console.log(data)
    // })
  }

  compileJ5 = () => {
    console.log("Compiling johnny5...")
    console.log(this.textInput.value)
    this.postCode(this.textInput.value)

  }

  render() {
    console.log(this.state)
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