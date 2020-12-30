const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const centerX = width / 2
const centerY = height / 2

const sun = new Particle(centerX, centerY, 0, 0)
const planet = new Particle(centerX + 200, centerY, 10, -Math.PI / 2)

sun.mass = 15000

function update() {
  context.clearRect(0, 0, width, height)

  planet.gravitateTo(sun)
  planet.update()

  context.beginPath()
  context.fillStyle = 'yellow'
  context.arc(sun.position.x, sun.position.y, 50, 0, Math.PI * 2)
  context.fill()

  context.beginPath()
  context.fillStyle = 'blue'
  context.arc(planet.position.x, planet.position.y, 10, 0, Math.PI * 2)
  context.fill()

  const radius = planet.distanceTo(sun)
  context.beginPath()
  context.fillStyle = 'grey'
  context.lineWidth = 0.5
  context.arc(centerX, centerY, radius, 0, Math.PI * 2, false)
  context.stroke()

  requestAnimationFrame(update)
}

update()
