class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  setAngle(angle) {
    const len = this.getLength()

    this.x = Math.cos(angle) * len
    this.y = Math.sin(angle) * len
  }

  getAngle() {
    return Math.atan2(this.y, this.x)
  }

  setLength(len) {
    const angle = this.getAngle()
    this.x = Math.cos(angle) * len
    this.y = Math.sin(angle) * len
  }

  add(v2) {
    return new Vector(this.x + v2.x, this.y + v2.y)
  }

  subtract(v2) {
    return new Vector(this.x - v2.x, this.y - v2.y)
  }

  multiply(val) {
    return new Vector(this.x * val, this.y * val)
  }

  divide(val) {
    return new Vector(this.x / val, this.y / val)
  }

  addTo(v2) {
    this.x += v2.x
    this.y += v2.y
  }

  subtractFrom(v2) {
    this.x -= v2.x
    this.y -= v2.y
  }

  multiplyBy(val) {
    this.x *= val
    this.y *= val
  }

  divideBy(val) {
    this.x /= val
    this.y /= val
  }
}
