import React, { Component } from 'react'
import Timer from './components/Timer'
import Logos from './components/Logos'
import './App.css'

class App extends Component {

  render () {
    return (
      <div className='App'>
        <Logos />
        <Timer />
        <canvas id='canvas' />
      </div>
    )
  }
}

export default App
