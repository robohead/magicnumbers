import React from 'react'

class Code extends React.Component {
  render () {
    return (
      <div className='item'>
        <div className={this.props.animatedCss}>
          {this.props.code || 'Loading...'}
        </div>
      </div>
    )
  }
}

export default Code
