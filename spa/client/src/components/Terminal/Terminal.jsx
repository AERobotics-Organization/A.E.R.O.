import React, { Component } from 'react'
import axios from 'axios'
import './terminal.css'
import codeMirror from 'codemirror'
import $ from 'jquery'


const codeURL = "http://localhost:8088/codeAPI"

class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCode: {}
    }
    this.fileInput = React.createRef()
    this.codeInput = React.createRef()
  }

  postCode = (file, code) => {
    if (file === '') {
      file = "index.js"
    }
    axios
      .post(codeURL, {
        currentFile: file,
        currentCode: code
      })
      .then(response => {
        console.log(response)
        const { currentFile, currentCode } = response.data
        this.setState({
          currentFile,
          currentCode
        })
      })
      .catch((err) => {
        console.log(err)
      })

  }

  createTextEditor = () => {
    codeMirror.fromTextArea(document.querySelector('form__input'), {
      lineNumbers: true,
      mode: "htmlmixed"
    })
  }

  compileJ5 = () => {
    console.log("Compiling johnny5...")
    console.log(this.codeInput.value)
    this.postCode(this.fileInput.value, this.codeInput.value)

  }

  componentDidMount() {

  }


  render() {
    console.log(this.state)
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