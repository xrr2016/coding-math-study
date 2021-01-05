export function removeDeadParticles(particles, canvas) {
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    const position = p.position

    if (
      position.x - p.radius > canvas.width ||
      position.x + p.radius < 0 ||
      position.y - p.radius > canvas.height ||
      position.y + p.radius < 0
    ) {
      particles.splice(i, 1)
    }
  }

  return particles
}

export function regenerateParticles(particle, canvas) {
  const position = particle.position

  if (position.y - particle.radius > canvas.height) {
    position.x = canvas.width / 2
    position.y = canvas.height
    particle.velocity.setLength(Math.random() * 8 + 5)
    particle.velocity.setAngle(-Math.PI / 2 + Math.random() * 0.2 - 0.1)
  }

  return particle
}

export function bounceParticle(particle, canvas) {
  const p = particle
  const width = canvas.width
  const height = canvas.height

  if (p.position.x + p.radius > width) {
    p.position.x = width - p.radius
    p.velocity.x = p.velocity.x * p.bounce
  }

  if (p.position.x - p.radius < 0) {
    p.position.x = p.radius
    p.velocity.x = p.velocity.x * p.bounce
  }

  if (p.position.y + p.radius > height) {
    p.position.y = height - p.radius
    p.velocity.y = p.velocity.y * p.bounce
  }

  if (p.position.y - p.radius < 0) {
    p.position.y = p.radius
    p.velocity.y = p.velocity.y * p.bounce
  }

  return p
}

export function norm(value, min, max) {
  return (value - min) / (max - min)
}

export function lerp(norm, min, max) {
  return (max - min) * norm + min
}

export function map(value, sourceMin, sourceMax, destMin, destMax) {
  return lerp(norm(value, sourceMin, sourceMax), destMin, destMax)
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max))
}

export function distance(p0, p1) {
  var dx = p1.x - p0.x,
    dy = p1.y - p0.y
  return Math.sqrt(dx * dx + dy * dy)
}

export function distanceXY(x0, y0, x1, y1) {
  var dx = x1 - x0,
    dy = y1 - y0
  return Math.sqrt(dx * dx + dy * dy)
}

export function circleCollision(c0, c1) {
  return distance(c0, c1) <= c0.radius + c1.radius
}

export function circlePointCollision(x, y, circle) {
  return distanceXY(x, y, circle.x, circle.y) < circle.radius
}

export function pointInRect(x, y, rect) {
  return (
    inRange(x, rect.x, rect.x + rect.width) &&
    inRange(y, rect.y, rect.y + rect.height)
  )
}

export function inRange(value, min, max) {
  return value >= Math.min(min, max) && value <= Math.max(min, max)
}

export function rangeIntersect(min0, max0, min1, max1) {
  return (
    Math.max(min0, max0) >= Math.min(min1, max1) &&
    Math.min(min0, max0) <= Math.max(min1, max1)
  )
}

export function rectIntersect(r0, r1) {
  return (
    rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
    rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height)
  )
}
