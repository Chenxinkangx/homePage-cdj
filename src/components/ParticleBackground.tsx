import { useEffect, useRef } from 'react'

interface ParticleBackgroundProps {
  particleCount?: number
  connectionDistance?: number
  particleRadius?: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

function rgbFromHex(hex: string): string {
  const h = hex.replace('#', '')
  if (h.length !== 6) return '59, 130, 246'
  const r = Number.parseInt(h.slice(0, 2), 16)
  const g = Number.parseInt(h.slice(2, 4), 16)
  const b = Number.parseInt(h.slice(4, 6), 16)
  return `${r}, ${g}, ${b}`
}

function ParticleBackground({
  particleCount = 60,
  connectionDistance = 150,
  particleRadius = 2,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const parent = canvas.parentElement!
    const dpr = window.devicePixelRatio || 1

    let width = parent.clientWidth
    let height = parent.clientHeight

    const resize = () => {
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }
    resize()

    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        radius: Math.random() * particleRadius + 0.5,
      })
    }

    const mouse = { x: -9999, y: -9999 }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const onMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    window.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(parent)

    let animationId: number
    let frameCount = 0
    let accentRgb = '59, 130, 246'

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      frameCount++
      if (frameCount % 60 === 0) {
        const hex = getComputedStyle(document.documentElement)
          .getPropertyValue('--accent-color')
          .trim()
        accentRgb = rgbFromHex(hex)
      }

      // Update & draw particles
      for (const p of particles) {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200 && dist > 0) {
          const force = 0.02
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        p.vx += (Math.random() - 0.5) * 0.05
        p.vy += (Math.random() - 0.5) * 0.05
        p.vx *= 0.995
        p.vy *= 0.995
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${accentRgb}, 0.5)`
        ctx.fill()
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const opacity = 1 - dist / connectionDistance
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${accentRgb}, ${opacity * 0.25})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      resizeObserver.disconnect()
    }
  }, [particleCount, connectionDistance, particleRadius])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  )
}

export default ParticleBackground
