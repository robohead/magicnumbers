import React, { Component } from 'react'
import Timer from './components/Timer'
import Matrix from './components/Matrix'
import './App.css'

class App extends Component {

  render () {
    return (
      <div className='App'>
        <Matrix />
        <Timer />
        <canvas id='canvas' />
      </div>
    )
  }
}

export default App
