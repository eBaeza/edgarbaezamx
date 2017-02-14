import React, { Component } from 'react'
import ebaeza from './edgarbaeza-thinking.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <img src={ebaeza} className="App-personage" alt="logo" />
          </div>
          <div>
            <div className="App-header">
              <h1>Edgar Baeza</h1>
              <h2>Web Application Developer</h2>

              <div className="intro-code">
                <code>
                  let ebaeza = 'Edgar Baeza'<br /><br />

                  if (ebaeza === 'Web developer')<br />
                  console.log("Let's code!!")
                </code>
              </div>
            </div>
            <p className="App-intro">
              "I enjoyed the puzzle of expressing human thoughts and idioms in terms of a programming language" <br />
              Joe McCullough.
            </p>

            <p>
              Contáctame: <br />
              email: <a href="mailto:holamundo@edgarbaeza.mx">holamundo@edgarbaeza.mx</a> <br />
              móvil: <a href="tel:5518373164">55 18373164</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
