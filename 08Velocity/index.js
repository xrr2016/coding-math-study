const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const centerX = width / 2
const centerY = height / 2

const p = new Particle(100, 100, 10, Math.PI / 2)

const particles = []
const numParticles = 100

for (let i = 0; i < numParticles; i++) {
  particles.push(
    new Particle(centerX, centerY, Math.random() * 4 + 1, Math.random() * Math.PI * 2)
  )
}

function update() {
  context.clearRect(0, 0, width, height)

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    p.update()
    context.beginPath()
    context.arc(p.position.x, p.position.y, 10, 0, Math.PI * 2, false)
    context.fill()
  }

  requestAnimationFrame(update)
}

update()
