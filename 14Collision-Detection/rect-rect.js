import { rectIntersect } from '../utils/index.js'

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

const rect1 = {
  x: Math.random() * width,
  y: Math.random() * height,
  width: 100,
  height: 200,
}

canvas.addEventListener('mousemove', (event) => {
  rect1.x = event.clientX - 50
  rect1.y = event.clientY - 100

  context.clearRect(0, 0, width, height)
  if (rectIntersect(rect, rect1)) {
    context.fillStyle = '#f66'
  } else {
    context.fillStyle = '#999'
  }

  context.fillRect(rect.x, rect.y, rect.width, rect.height)
  context.fillRect(rect1.x, rect1.y, rect1.width, rect1.height)
})
