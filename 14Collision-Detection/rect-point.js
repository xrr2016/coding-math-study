import { pointInRect } from '../utils/index.js'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const rect = {
  x: Math.random() * width,
  y: Math.random() * height,
  width: 100 + Math.random() * 100,
  height: 100 + Math.random() * 100,
}

context.fillStyle = '#999'
context.fillRect(rect.x, rect.y, rect.width, rect.height)

canvas.addEventListener('mousemove', (event) => {
  context.clearRect(0, 0, width, height)
  if (pointInRect(event.clientX, event.clientY, rect)) {
    context.fillStyle = '#f66'
  } else {
    context.fillStyle = '#999'
  }
  context.fillRect(rect.x, rect.y, rect.width, rect.height)
})
