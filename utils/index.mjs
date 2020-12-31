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
}

export function regenerateParticles(particle, canvas) {
  const position = particle.position

  if (position.y - particle.radius > canvas.height) {
    position.x = canvas.width / 2
    position.y = canvas.height
    particle.velocity.setLength(Math.random() * 8 + 5)
    particle.velocity.setAngle(-Math.PI / 2 + Math.random() * 0.2 - 0.1)
  }
}
