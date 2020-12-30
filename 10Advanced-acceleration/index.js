const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const centerX = width / 2
const centerY = height / 2

const ship = new Particle(centerX, centerY, 0, 0)
const thust = new Vector(0, 0)

let angle = 0
let turningLeft = false
let turningRight = false
let thrusting = false

document.body.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 38:
      thrusting = true
      break
    case 37:
      turningLeft = true
      break
    case 39:
      turningRight = true
      break

    default:
      break
  }
})

document.body.addEventListener('keyup', function (event) {
  switch (event.keyCode) {
    case 38:
      thrusting = false
      break
    case 37:
      turningLeft = false

      break
    case 39:
      turningRight = false
      break
    default:
      break
  }
})

function update() {
  const position = ship.position
  context.clearRect(0, 0, width, height)

  if(turningLeft) {
    angle -= 0.05
  }

  if(turningRight) {
    angle += 0.05
  }

  thust.setAngle(angle)

  if(thrusting) {
    thust.setLength(0.1)
  } else {
    thust.setLength(0.0)
  }

  ship.accelerate(thust)
  ship.update()

  context.save();
  context.translate(position.x, position.y);
  context.rotate(angle);
  

  context.beginPath()
  context.moveTo(10, 0);
  context.lineTo(-10, -7);
  context.lineTo(-10, 7);
  context.lineTo(10, 0);
  if(thrusting) {
    context.moveTo(-10, 0);
    context.lineTo(-18, 0);
  }
  context.stroke();
 
  context.restore();
  
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
