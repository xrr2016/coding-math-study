const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const centerX = width / 2
const centerY = height / 2

const p = new Particle(centerX, centerY, 2, Math.random() * Math.PI * 2)
p.radius = 60

function update() {
  context.clearRect(0, 0, width, height)
  const position = p.position

  p.update()

  context.beginPath()
  context.arc(position.x, position.y, p.radius, 0, Math.PI * 2, false)
  context.fill()

  if (position.x - p.radius > width) {
    position.x = p.radius
  }

  if (position.x + p.radius < 0) {
    position.x = width + p.radius
  }

  if (position.y - p.radius > height) {
    position.y = p.radius
  }

  if (position.y + p.radius < 0) {
    position.y = height + p.radius
  }

  requestAnimationFrame(update)
}

update()
