const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const centerX = width / 2
const centerY = height / 2

const ship = new Particle(centerX, centerY, 0, 0)
const thust = new Vector(0, 0)
const angle = 0

document.body.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 38:
      thust.y = -0.1
      break
    case 40:
      thust.y = 0.1
      break
    case 37:
      thust.x = -0.1
      break
    case 39:
      thust.x = 0.1
      break

    default:
      break
  }
})

document.body.addEventListener('keyup', function (event) {
  switch (event.keyCode) {
    case 38:
      thust.y = 0
      break
    case 40:
      thust.y = 0
      break
    case 37:
      thust.x = 0
      break
    case 39:
      thust.x = 0
      break
    default:
      break
  }
})

function update() {
  const position = ship.position
  context.clearRect(0, 0, width, height)

  ship.accelerate(thust)
  ship.update()
  context.beginPath()
  context.arc(position.x, position.y, 10, 0, Math.PI * 2, false)
  context.fill()

  if (position.x > width) {
    position.x = 0
  }

  if (position.x < 0) {
    position.x = width
  }

  if (position.y > height) {
    position.y = 0
  }

  if (position.y < 0) {
    position.y = height
  }

  requestAnimationFrame(update)
}

update()
