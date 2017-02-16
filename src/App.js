import React, { Component } from 'react'
import ebaezaThink from './edgarbaeza-thinking.png'
import ebaezaSit from './edgarbaeza-sitting.png'
import './App.css'

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

            <div className="App-introcode">
              <code>
                let ebaeza = new Developer()<br /><br />
                if (ebaeza.status !== 'coding') {'{'}<br />
                &nbsp;&nbsp;console.log("Hey! I need tacos!")<br />
                &nbsp;&nbsp;ebaeza.getSteroids()<br />
                {'} else {'}<br />
                &nbsp;&nbsp;console.log("Let's rock!!")<br />
                &nbsp;&nbsp;ebaeza.getThePower()<br />
                {'}'}
              </code>
            </div>

            <p className="App-intro">"I enjoy the puzzle of expressing human thoughts and idioms in terms of a programming language"</p>

            <footer>
              Contact: <br />
              <i className="fa fa-envelope"></i> <a href="mailto:holamundo@edgarbaeza.mx">holamundo@edgarbaeza.mx</a> <br />
              <i className="fa fa-mobile"></i> <a href="tel:5518373164">55 18373164</a> <br /><br />
              Social: <br />
              <i className="fa fa-github"></i> <a href="https://github.com/eBaeza">eBaeza</a> <br />
              <i className="fa fa-linkedin"></i> <a href="https://mx.linkedin.com/in/edgar-baeza">edgar-baeza</a> <br />
              <br />
              <p>Un saludo con mucho cariño a Yaki Zeltzin ❤</p>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default App
