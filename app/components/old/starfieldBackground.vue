<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'

const starfieldRef = ref<HTMLCanvasElement>()

onMounted(() => {
  if (!starfieldRef.value) return

  const canvas = starfieldRef.value
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Automatic movement
  let time = 0
  const autoMovementSpeed = 0.1
  const autoMovementRadius = 10000

  // Set canvas size
  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resizeCanvas()

  // Event listeners
  const handleResize = () => resizeCanvas()

  window.addEventListener('resize', handleResize)

  // Star configuration
  const stars: Array<{
    x: number
    y: number
    baseX: number
    baseY: number
    size: number
    opacity: number
    speed: number
    parallaxFactor: number
  }> = []

  // Shooting stars
  const shootingStars: Array<{
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
    size: number
  }> = []

  const createStars = () => {
    const numStars = Math.floor((canvas.width * canvas.height) / 6000)
    stars.length = 0 // Clear existing stars

    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      stars.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 1.2 + 0.2, // Smaller stars (was 2.5 + 0.5)
        opacity: Math.random() * 0.6 + 0.1, // Slightly dimmer (was 0.8 + 0.2)
        speed: Math.random() * 0.02 + 0.01,
        parallaxFactor: Math.random() * 0.02 + 0.005 // Reduced parallax
      })
    }
  }

  const createShootingStar = (startX: number, startY: number) => {
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 6 + 2 // Slightly slower

    shootingStars.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0,
      maxLife: 60 + Math.random() * 40,
      size: Math.random() * 2 + 1 // Smaller shooting stars
    })
  }

  const drawStar = (star: typeof stars[0]) => {
    // Calculate automatic movement offset
    const autoOffsetX = Math.cos(time * autoMovementSpeed) * autoMovementRadius
    const autoOffsetY = Math.sin(time * autoMovementSpeed * 0.7) * autoMovementRadius * 0.5

    const x = star.baseX + autoOffsetX * star.parallaxFactor 
    const y = star.baseY + autoOffsetY * star.parallaxFactor + mouseOffsetY

    // Draw main star
    ctx.beginPath()
    ctx.arc(x, y, star.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
    ctx.fill()

    // Add glow effect for larger stars (reduced threshold)
    if (star.size > 0.8) {
      ctx.beginPath()
      ctx.arc(x, y, star.size * 1.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.05})` // Reduced glow
      ctx.fill()
    }

    // Update star position
    star.x = x
    star.y = y
  }

  const drawShootingStar = (shootingStar: typeof shootingStars[0]) => {
    const alpha = 1 - (shootingStar.life / shootingStars.maxLife)

    // Draw trail
    const trailLength = 15 // Shorter trail
    for (let i = 0; i < trailLength; i++) {
      const trailAlpha = alpha * (1 - i / trailLength) * 0.6 // Dimmer trail
      if (trailAlpha <= 0) continue

      const trailX = shootingStar.x - shootingStar.vx * i * 0.5
      const trailY = shootingStar.y - shootingStar.vy * i * 0.5
      const trailSize = shootingStar.size * (1 - i / trailLength)

      ctx.beginPath()
      ctx.arc(trailX, trailY, trailSize, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 150, ${trailAlpha})`
      ctx.fill()
    }

    // Draw main shooting star
    ctx.beginPath()
    ctx.arc(shootingStar.x, shootingStar.y, shootingStar.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 200, ${alpha})`
    ctx.fill()

    // Add bright glow (reduced)
    ctx.beginPath()
    ctx.arc(shootingStar.x, shootingStar.y, shootingStar.size * 2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 150, ${alpha * 0.2})`
    ctx.fill()
  }

  const updateStars = () => {
    stars.forEach(star => {
      // Twinkling effect
      star.opacity += (Math.random() - 0.5) * star.speed
      star.opacity = Math.max(0.05, Math.min(0.7, star.opacity)) // Dimmer range
    })
  }

  const updateShootingStars = () => {
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const shootingStar = shootingStars[i]

      // Update position
      shootingStar.x += shootingStar.vx
      shootingStar.y += shootingStar.vy
      shootingStar.life++

      // Apply gravity
      shootingStar.vy += 0.08

      // Remove if out of bounds or life expired
      if (shootingStar.life > shootingStar.maxLife ||
          shootingStar.x < -50 || shootingStar.x > canvas.width + 50 ||
          shootingStar.y < -50 || shootingStar.y > canvas.height + 50) {
        shootingStars.splice(i, 1)
      }
    }
  }

  // Add some random shooting stars (less frequent)
  const addRandomShootingStar = () => {
    if (Math.random() < 0.001) { // 0.1% chance per frame (was 0.3%)
      const side = Math.floor(Math.random() * 4)
      let startX, startY

      switch (side) {
        case 0: // Top
          startX = Math.random() * canvas.width
          startY = -20
          break
        case 1: // Right
          startX = canvas.width + 20
          startY = Math.random() * canvas.height
          break
        case 2: // Bottom
          startX = Math.random() * canvas.width
          startY = canvas.height + 20
          break
        default: // Left
          startX = -20
          startY = Math.random() * canvas.height
      }

      createShootingStar(startX, startY)
    }
  }

  const animate = () => {
    time++

    // Clear canvas with darker background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, '#020617') // Much darker (was #0f172a)
    gradient.addColorStop(0.5, '#0f172a') // Darker (was #1e293b)
    gradient.addColorStop(1, '#1e293b') // Darker (was #334155)

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Update and draw everything
    updateStars()
    updateShootingStars()
    addRandomShootingStar()

    stars.forEach(drawStar)
    shootingStars.forEach(drawShootingStar)

    requestAnimationFrame(animate)
  }

  // Initialize
  createStars()
  animate()

  // Cleanup function
  const cleanup = () => {
    window.removeEventListener('resize', handleResize)
  }

  onUnmounted(cleanup)
})
</script>

<template>
  <canvas
      ref="starfieldRef"
      class="fixed inset-0 z-0 cursor-crosshair"
      style="background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)"
  />
</template>

<style scoped>

</style>