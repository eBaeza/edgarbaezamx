import React, { Component } from 'react'
import ebaezaThink from './edgarbaeza-thinking.png'
import ebaezaSit from './edgarbaeza-sitting.png'
import './App.css'
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-dark.css'

class App extends Component {
  render() {
    let snippet =
`let ebaeza = new Developer()

if (ebaeza.status !== 'coding') {
  console.log("Hey! I need tacos!")
  ebaeza.getSteroids()
} else {
  console.log("Let's rock!!")
  ebaeza.getThePower()
}`

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
              <p>Resume: <i className="fa fa-file-text"/> <a href="https://www.dropbox.com/s/9uj6d4a4dvwdzrt/Edgar_Aparicio_Baeza_CV_2017.pdf?dl=0" target="_blank">More about me</a> </p>
              <p>
                Social: <br />
                <i className="fa fa-github"></i> <a href="https://github.com/eBaeza">eBaeza</a> <br />
                <i className="fa fa-linkedin"></i> <a href="https://mx.linkedin.com/in/edgar-baeza">edgar-baeza</a> <br />
              </p>
              <p>Un saludo con mucho cariño a Yaki Zeltzin ❤</p>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default App
