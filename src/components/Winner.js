import React from 'react'
import Code from './Code'
import Confetti from './Confetti'

const Winner = props => {
    return (
      <div className='winner' style={props.ready ? {} : {display: 'none'}}>
        {props.stop && <Confetti />}
        <Code
          code={props.stop ? props.winner.code : props.code}
          animatedCss={props.stop ? 'animated rubberBand' : 'animated infinite flipInX'} />
        <div className={props.stop ? 'winner-name animated fadeInDown' : 'winner-name'}>
            <span>{props.stop ? props.winner.name : ''}</span>
        </div>
      </div>
    )
}

export default Winner
