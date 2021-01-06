import Vector from '../objects/vector.js'
import Particle from '../objects/particle.js'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const k = 0.05

let springPoint = new Vector(width / 2, height / 2)
let weight = new Particle(
  Math.random() * width,
  Math.random() * height,
  50,
  Math.random() * Math.PI * 2
)

weight.radius = 30
weight.friction = 0.9

function update(params) {
  context.clearRect(0, 0, width, height)

  let distance = springPoint.subtract(weight.position)
  let springForce = distance.multiply(k)

  weight.velocity.addTo(springForce)
  weight.update()

  context.beginPath()
  context.arc(
    weight.position.x,
    weight.position.y,
    weight.radius,
    0,
    Math.PI * 2,
    false
  )
  context.fill()

  context.beginPath()
  context.arc(springPoint.x, springPoint.y, 4, 0, Math.PI * 2, false)
  context.fill()

  context.beginPath()
  context.moveTo(weight.position.x, weight.position.y)
  context.lineTo(springPoint.x, springPoint.y)
  context.stroke()

  requestAnimationFrame(update)
}

update()

canvas.addEventListener('mousemove', (event) => {
  springPoint.x = event.clientX
  springPoint.y = event.clientY
})
