import axios from 'axios'
import React from 'react'
import Winner from './Winner'
import Matrix from './Matrix/index'

import getRandomNumber from '../utils'

class Timer extends React.Component {
  constructor () {
    super()
    this.state = {
      stop: false,
      current: '',
      ready: false,
      winner: null,
      wait: false,
    }
  }

  componentDidMount () {
    this.startTimer()
    setTimeout(() => {
      this.setState({ready: true})
    }, 800)
    document.addEventListener('keydown', this.handleSpacebar.bind(this), false)
  }

  startTimer () {
    let intervalId = setInterval(() => {
      this.setState({current: getRandomNumber()})
    }, 200)
    this.setState({
        intervalId: intervalId, current: getRandomNumber(), winner: null,
        wait: false
    })
  }

  stopTimer () {
    clearInterval(this.state.intervalId)
    setTimeout(() => {
        this.getWinner()
    }, 2000)
  }

  getWinner () {
    axios.get('/konkurs/api/number')
      .then((res) => {
        this.setState({winner: res.data, wait: false})
      })
  }

  handleSpacebar (event) {
    if (event.code === 'Space') {
      this.setState({wait: true, stop: !this.state.stop})
      this.state.stop ? this.stopTimer() : this.startTimer()
    }
  }

  render () {
    return (
      <div>
        <Matrix stop={this.state.stop} />
        <h1>{this.state.ready ? '' : 'Loading...'}</h1>
        <Winner
            stop={this.state.stop} winner={this.state.winner}
            code={this.state.wait ? 'Loading' : this.state.current} ready={this.state.ready} />}
      </div>
    )
  }
}

export default Timer
