import React, { Component } from 'react'
import snippet from './snippetCode'
import ebaezaThink from './edgarbaeza-thinking.png'
import ebaezaSit from './edgarbaeza-sitting.png'
import './App.css'
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-dark.css'

const urlCV = 'https://storage.googleapis.com/edgarbaezamx.appspot.com/Edgar_Aparicio_Baeza_CV.pdf'

class App extends Component {
  render() {
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
                <i className="fa fa-envelope"></i> <a href="mailto:ebaeza1992@gmail.com">ebaeza1992@gmail.com</a> <br />
              </p>
              <p>Resume: <i className="fa fa-file-text"/> <a href={urlCV} target="_blank" rel="noreferrer">More about me</a> </p>
              <p>
                Social: <br />
                <i className="fa fa-github"></i> <a href="https://github.com/eBaeza" target="_blank" rel="noreferrer">eBaeza</a> <br />
                <i className="fa fa-linkedin"></i> <a href="https://mx.linkedin.com/in/edgar-baeza" target="_blank" rel="noreferrer">edgar-baeza</a> <br />
              </p>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default App
