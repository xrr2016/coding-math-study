import Particle from '../objects/particle.mjs'
import { removeDeadParticles, regenerateParticles } from '../utils/index.mjs'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const centerX = width / 2
const centerY = height / 2

const particles = []
const numParticles = 200

for (let i = 0; i < numParticles; i++) {
  const p = new Particle(
    centerX,
    height,
    Math.random() * 8 + 5,
    -Math.PI / 2 + Math.random() * 0.2 - 0.1,
    0.05
  )
  p.radius = Math.random() * 8 + 2
  particles.push(p)
}

function update() {
  context.clearRect(0, 0, width, height)

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    p.update()
    context.beginPath()
    context.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2, false)
    context.fill()

    regenerateParticles(p, canvas)
  }

  // removeDeadParticles(particles, canvas)
  requestAnimationFrame(update)
}

update()
