import Vector from './vector.mjs'

class Particle {
  position = null
  velocity = null
  gravity = null
  mass = 1
  radius = 0
  bounce = -1
  friction = 1

  constructor(x, y, speed, direction, gravity) {
    this.position = new Vector(x, y)
    this.velocity = new Vector(0, 0)
    this.velocity.setLength(speed)
    this.velocity.setAngle(direction)
    this.gravity = new Vector(0.0, gravity ? gravity : 0.0)
  }

  update() {
    this.velocity.multiplyBy(this.friction)
    this.velocity.addTo(this.gravity)
    this.position.addTo(this.velocity)
  }

  accelerate(accel) {
    this.velocity.addTo(accel)
  }

  angleTo(p2) {
    return Math.atan2(
      p2.position.y - this.position.y,
      p2.position.x - this.position.x
    )
  }

  distanceTo(p2) {
    const dx = p2.position.x - this.position.x
    const dy = p2.position.y - this.position.y

    return Math.sqrt(dx ** 2 + dy ** 2)
  }

  gravitateTo(p2) {
    const grav = new Vector(0, 0)
    const dist = this.distanceTo(p2)

    grav.setLength(p2.mass / dist ** 2)
    grav.setAngle(this.angleTo(p2))

    this.velocity.addTo(grav)
  }
}

export default Particle
