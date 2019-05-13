import React, { Component } from 'react'
import snippet from './snippetCode'
import ebaezaThink from './edgarbaeza-thinking.png'
import ebaezaSit from './edgarbaeza-sitting.png'
import './App.css'
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-dark.css'

const urlCV = 'https://firebasestorage.googleapis.com/v0/b/edgarbaezamx.appspot.com/o/Edgar_Aparicio_Baeza_CV.pdf?alt=media&token=227c4338-3280-4fe7-9770-6e1ab8752abc'

class App extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  render() {
    const { numPages, pageNumber } = this.state

    return (
      <div className="App">
        <div className="container">
          <div>
            <img src={ebaezaThink} className="App-personage thinking" alt="Edgar Baeza pensando"/>
          </div>
          <div>
            <header className="App-header">
              <h1>Edgar Baeza</h1>
              <h2>Web Application Developer</h2>
            </header>

            <img src={ebaezaSit} className="App-personage sitting" alt="Edgar Baeza sentado"/>

            <Highlight className="App-introcode js">
              {snippet}
            </Highlight>

            <p className="App-intro">"I enjoy the puzzle of expressing human thoughts and idioms in terms of a programming language"</p>

            <footer>
              <p>
                Contact: <br />
                <i className="fa fa-envelope"></i> <a href="mailto:holamundo@edgarbaeza.mx">holamundo@edgarbaeza.mx</a> <br />
                <i className="fa fa-mobile"></i> <a href="tel:5518373164">55 18373164</a> <br />
                <i className="fa fa-skype"></i> <a href="skype:e-baeza?chat">e-baeza</a>
              </p>
              <p>Resume: <i className="fa fa-file-text"/> <a href={urlCV} target="_blank">More about me</a> </p>
              <p>
                Social: <br />
                <i className="fa fa-github"></i> <a href="https://github.com/eBaeza" target="_blank">eBaeza</a> <br />
                <i className="fa fa-linkedin"></i> <a href="https://mx.linkedin.com/in/edgar-baeza" target="_blank">edgar-baeza</a> <br />
              </p>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default App
