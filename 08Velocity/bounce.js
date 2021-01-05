import Particle from '../objects/particle.mjs'
import { bounceParticle } from '../utils/index.mjs'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const p = new Particle(
  width / 2,
  height / 2,
  5,
  Math.random() * Math.PI * 2,
  0.2
)
p.radius = 40
p.bounce = -0.9

function update() {
  context.clearRect(0, 0, width, height)

  p.update()

  context.beginPath()
  context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false)
  context.fill()

  bounceParticle(p, canvas)
  requestAnimationFrame(update)
}

update()
