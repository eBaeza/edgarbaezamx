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

const urlCV = '/Edgar_Aparicio_Baeza_CV.pdf'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="glass-container">

          {/* Left Column: Information & Actions */}
          <div className="content-col">
            <header className="App-header">
              <h1>Edgar Aparicio Baeza</h1>
              <h2>Software Engineer</h2>
            </header>

            <img src={ebaezaSit} className="App-personage sitting" alt="Edgar Baeza sitting" />

            <p className="App-intro">"I enjoy the puzzle of expressing human thoughts in terms of a programming language"</p>

            <main className="contact-actions">
              <div className="action-section">
                <h3>Contact</h3>
                <div className="action-group">
                  <a className="action-btn" href="mailto:ebaeza1992@gmail.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} /> Email Me
                  </a>
                  <a className="action-btn" href="https://wa.me/525518373164" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="action-section">
                <h3>Resume</h3>
                <div className="action-group">
                  <a className="action-btn" href={urlCV} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFileText} /> View CV
                  </a>
                </div>
              </div>

              <div className="action-section">
                <h3>Social</h3>
                <div className="action-group">
                  <a className="action-btn" href="https://github.com/eBaeza" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                  <a className="action-btn" href="https://mx.linkedin.com/in/edgar-baeza" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                  </a>
                </div>
              </div>
            </main>
          </div>

          {/* Right Column: Visuals & Code */}
          <div className="visual-col">
            <img src={ebaezaThink} className="App-personage thinking" alt="Edgar Baeza thinking" />

            <div className="mac-window">
              <div className="mac-window-header">
                <div className="mac-dot close"></div>
                <div className="mac-dot minimize"></div>
                <div className="mac-dot maximize"></div>
              </div>
              <Highlight className="App-introcode js">
                {snippet}
              </Highlight>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App
