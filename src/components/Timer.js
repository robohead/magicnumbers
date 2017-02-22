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
      ready: false
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
    }, 800)
    this.setState({intervalId: intervalId, current: getRandomNumber()})
  }

  stopTimer () {
    clearInterval(this.state.intervalId)
  }

  handleSpacebar (event) {
    if (event.code === 'Space') {
      this.setState({stop: !this.state.stop})
      this.state.stop ? this.stopTimer() : this.startTimer()
    }
  }

  render () {
    return (
      <div>
        <Matrix stop={this.state.stop} />
        <h1>{this.state.ready ? '' : 'Loading...'}</h1>
        <Winner
          stop={this.state.stop} code={this.state.current}
          ready={this.state.ready} />
      </div>
    )
  }
}

export default Timer
