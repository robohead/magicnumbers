import React from 'react'
import Code from './Code'
import Confetti from './Confetti'

const Winner = props => {
    return (
      <div className='winner' style={props.ready ? {} : {display: 'none'}}>
        {props.winner && <Confetti />}
        <Code
          code={props.winner ? props.winner.code : props.code}
          animatedCss={props.winner ? 'animated rubberBand' : 'animated infinite pulse'} />
        {props.winner && <div className={props.stop ? 'winner-name animated fadeInDown' : 'winner-name'}>

          <span>{props.winner.name}</span>
          <span className='winner-phone'>{props.winner.phone}</span>
        </div>}
      </div>
    )
}

export default Winner
