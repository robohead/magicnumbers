import React from 'react'

class Code extends React.Component {
  render () {
    return (
      <div className={this.props.animatedCss}>
        <span className='item'>
          {this.props.code || 'Loading...'}
        </span>
      </div>
    )
  }
}

export default Code
