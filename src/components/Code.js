import React from 'react'

const Code = props => {
    return (
      <div className={props.animatedCss}>
        <span className='item'>
          {props.code || 'Loading...'}
        </span>
      </div>
    )
}

export default Code
