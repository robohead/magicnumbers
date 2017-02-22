import React from 'react'
import axios from 'axios'
import Code from './Code'

class Winner extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      winner: '',
      updated: true
    }
  }

  componentDidMount () {
    this.getWinner()
    this.updateWinner()
  }

  getWinner () {
    axios.get('/konkurs/api/number')
      .then((res) => {
        this.setState({winner: res.data})
      })
  }

  updateWinner () {
    setInterval(() => {
      if (this.props.stop) {
        this.setState({updated: true})
      } else if (!this.props.stop && this.state.updated) {
        this.getWinner()
        this.setState({updated: false})
      }
    }, 1000)
  }

  render () {
    return (
      <div className='winner' style={this.props.ready ? {} : {display: 'none'}}>
        <Code
          code={this.props.stop ? this.state.winner.code : this.props.code}
          animatedCss={this.props.stop ? 'animated rubberBand' : 'animated infinite flipInX'} />
        <div className={this.props.stop ? 'winner-name animated fadeInDown' : 'winner-name'}><span>{this.props.stop ? this.state.winner.name : ''}</span></div>
      </div>
    )
  }
}

export default Winner
