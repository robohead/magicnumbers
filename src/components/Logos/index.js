import React, {Component} from 'react'
import './logos.css'
import dps from './dps-logo.svg'
import march from './march-logo.svg'
import dvep from './dvep-logo.svg'

class Logos extends Component {

  render () {
    return (
      <div className='logo-wrap'>
        <img src={march} alt='' />
        <img src={dps} alt='' />
        <img className='dvep-logo' src={dvep} alt='' />
      </div>
    )
  }
}

export default Logos
