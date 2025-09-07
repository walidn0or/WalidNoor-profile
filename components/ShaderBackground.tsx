'use client'

import { useEffect, useRef } from 'react'

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGradient = (time: number) => {
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 0.001) * 200,
        canvas.height * 0.5 + Math.cos(time * 0.001) * 200,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        Math.max(canvas.width, canvas.height) * 0.8
      )

      gradient.addColorStop(0, `hsla(${260 + Math.sin(time * 0.002) * 20}, 70%, 60%, 0.8)`)
      gradient.addColorStop(0.3, `hsla(${280 + Math.cos(time * 0.003) * 30}, 60%, 50%, 0.6)`)
      gradient.addColorStop(0.6, `hsla(${240 + Math.sin(time * 0.001) * 40}, 80%, 40%, 0.4)`)
      gradient.addColorStop(1, `hsla(${220 + Math.cos(time * 0.002) * 20}, 90%, 20%, 0.2)`)

      return gradient
    }

    const animate = () => {
      time += 16
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create animated gradient
      const gradient = createGradient(time)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Add floating particles
      for (let i = 0; i < 50; i++) {
        const x = (Math.sin(time * 0.001 + i) * canvas.width * 0.3) + canvas.width * 0.5
        const y = (Math.cos(time * 0.0015 + i) * canvas.height * 0.3) + canvas.height * 0.5
        const size = Math.abs(Math.sin(time * 0.002 + i) * 3) + 2
        
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${300 + i * 10}, 70%, 70%, ${0.1 + Math.abs(Math.sin(time * 0.003 + i)) * 0.1})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
    />
  )
}
