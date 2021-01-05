import { circlePointCollision } from '../utils/index.js'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const circle = {
  x: Math.random() * width,
  y: Math.random() * height,
  radius: 50 + Math.random() * 100,
}

canvas.addEventListener('mousemove', (event) => {
  if (circlePointCollision(event.clientX, event.clientY, circle)) {
    context.fillStyle = '#f66'
  } else {
    context.fillStyle = '#999'
  }
})

function update() {
  context.clearRect(0, 0, width, height)

  context.beginPath()
  context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false)
  context.fill()

  requestAnimationFrame(update)
}

update()
