import React from 'react'

let particle = []
let colors = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722', '#795548'
]

function drawScreen (context, r1, particle, width, height) {
  let size = 50
  let pFontName = 'Lucida Sans Unicode'
  context.font = size + 'pt ' + pFontName
  context.fillText('', width / 2, 150)
  if (r1.alphatop < 1) {
    r1.alphatop += 0.01
  } else {
    r1.alphatop = 1
  }
  context.globalAlpha = r1.alphatop

  if (r1.alphatop === 1) {
    r1.velY *= 0.999
    r1.velY += 0.3

    r1.x += r1.velX
    r1.y += r1.velY
  }

  if (r1.y + r1.height > height) {
    r1.anglespin = 0
    r1.y = height - r1.height
    r1.velY *= -0.8
    r1.velX *= 0.9
  };

  context.globalAlpha = 1
  for (var i = 0; i < particle.length; i++) {
    particle[i].draw()
  }
}

function randomRange (min, max) {
  return min + Math.random() * (max - min)
}

function convertToRadians (degree) {
  return degree * (Math.PI / 180)
}

class Confetti extends React.Component {

  startConfetti () {
    const canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')
    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    for (var i = 0; i < 300; i++) {
      particle.push({
        x: width / 2,
        y: height / 2,
        boxW: randomRange(5, 20),
        boxH: randomRange(5, 20),
        size: randomRange(2, 8),

        spikeran: randomRange(3, 5),

        velX: randomRange(-8, 8),
        velY: randomRange(-50, -10),

        angle: convertToRadians(randomRange(0, 360)),
        color: colors[Math.floor(Math.random() * colors.length)],
        anglespin: randomRange(-0.2, 0.2),

        draw: function () {
          context.save()
          context.translate(this.x, this.y)
          context.rotate(this.angle)
          context.fillStyle = this.color
          context.beginPath()
          context.fillRect(this.boxW / 2 * -1, this.boxH / 2 * -1, this.boxW, this.boxH)
          context.fill()
          context.closePath()
          context.restore()
          this.angle += this.anglespin
          this.velY *= 0.999
          this.velY += 0.3

          this.x += this.velX
          this.y += this.velY
          if (this.y < 0) {
            this.velY *= -0.2
            this.velX *= 0.9
          };
          if (this.y > height) {
            this.anglespin = 0
            this.y = height
            this.velY *= -0.2
            this.velX *= 0.9
          };
          if (this.x > width || this.x < 0) {
            this.velX *= -0.5
          };
        }

      })
    }

    let r1 = {
      x: width / 2 - 150,
      y: height / 2 - 150,
      width: 300, height: 300,
      velX: 0, velY: -10,
      alphatop: 0
    }

    function update () {
      context.clearRect(0, 0, width, height)
      drawScreen(context, r1, particle, width, height)
      requestAnimationFrame(update)
    }

    update()
  }

  componentDidMount () {
    this.startConfetti()
  }
  render () {
    return (<canvas id='canvas' />)
  }
}

export default Confetti
