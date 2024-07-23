import React, { Component } from 'react'
import snippet from './snippetCode'
import ebaezaThink from './edgarbaeza-thinking.png'
import ebaezaSit from './edgarbaeza-sitting.png'
import './App.css'
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileText } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

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
              <h1>Edgar Aparicio Baeza</h1>
              <h2>Software Engineer</h2>
            </header>

            <img src={ebaezaSit} className="App-personage sitting" alt="Edgar Baeza sentado"/>

            <Highlight className="App-introcode js">
              {snippet}
            </Highlight>

            <p className="App-intro">"I enjoy the puzzle of expressing human thoughts in terms of a programming language"</p>

            <main>
              <p>
                Contact: <br />
                <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:ebaeza1992@gmail.com" target="_blank" rel="noreferrer">ebaeza1992@gmail.com</a> <br />
                <FontAwesomeIcon icon={faWhatsapp} /> <a href="https://wa.me/525518373164" target="_blank" rel="noreferrer">Chat me</a> <br />
              </p>
              <p>Resume: <FontAwesomeIcon icon={faFileText} /> <a href={urlCV} target="_blank" rel="noreferrer">More about me</a> </p>
              <p>
                Social: <br />
                <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/eBaeza" target="_blank" rel="noreferrer">eBaeza</a> <br />
                <FontAwesomeIcon icon={faLinkedin} /> <a href="https://mx.linkedin.com/in/edgar-baeza" target="_blank" rel="noreferrer">edgar-baeza</a> <br />
              </p>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default App
