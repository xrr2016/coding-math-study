import Particle from '../objects/particle.mjs'
import Vector from '../objects/vector.mjs'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const p = new Particle(width / 2, height / 2, 10, Math.random() * Math.PI * 2)
p.radius = 10

const friction = 0.97

function update() {
  context.clearRect(0, 0, width, height)

  p.velocity.multiplyBy(friction)
  p.update()

  context.beginPath()
  context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false)
  context.fill()

  requestAnimationFrame(update)
}

update()
