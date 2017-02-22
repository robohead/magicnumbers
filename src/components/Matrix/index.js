import React, {Component} from 'react'
import './matrix.css'

class Matrix extends Component {

  matrixVars (props) {
    var c = document.getElementById('c')
    var ctx = c.getContext('2d')

    // making the canvas full screen
    c.height = window.innerHeight
    c.width = window.innerWidth

    // chinese characters - taken from the unicode charset
    var chinese = '0123456789qwertyuiopasdfghjklzxcvbnm'
    // converting the string into an array of single characters
    chinese = chinese.split('')

    var font_size = 24
    var columns = c.width / font_size // number of columns for the rain
    // an array of drops - one per column
    var drops = []
    // x below is the x coordinate
    // 1 = y co-ordinate of the drop(same for every drop initially)

    for (var x = 0; x < columns; x++) {
      drops[x] = 1
    }

    // drawing the characters
    function draw (props) {
      // Black BG for the canvas
      // translucent BG to show trail
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.fillRect(0, 0, c.width, c.height)

      let colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
        '#FF5722', '#795548'
      ] // green text
      ctx.font = font_size + 'px arial'
      // looping over drops
      for (var i = 0; i < drops.length; i++) {
        if (this.props && this.props.stop) {
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        } else {
          ctx.fillStyle = '#000'
        }
        // a random chinese character to print
        var text = chinese[Math.floor(Math.random() * chinese.length)]
        // x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size)

        // sending the drop back to the top randomly after it has crossed the screen
        // adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // incrementing Y coordinate
        drops[i]++
      }
    }

    setInterval(draw.bind(this), 33)
  }

  componentDidMount (props) {
    this.matrixVars(props)
  }

  render () {
    return (
      <canvas id='c' />
    )
  }
}

export default Matrix
