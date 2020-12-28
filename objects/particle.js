class Particle {
  position = null
  velocity = null
  gravity = null

  constructor(x, y, speed, direction, gravity) {
    this.position = new Vector(x, y)
    this.velocity = new Vector(0, 0)
    this.velocity.setLength(speed)
    this.velocity.setAngle(direction)
    this.gravity = gravity || new Vector(0.0, 0.0)
  }

  update() {
    this.velocity.addTo(this.gravity)
    this.position.addTo(this.velocity)
  }

  accelerate(accel) {
    this.velocity.addTo(accel)
  }
}
