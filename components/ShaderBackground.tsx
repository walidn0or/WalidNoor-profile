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

    const createFlowingGradient = (time: number) => {
      // Create multiple overlapping gradients for depth
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time * 0.0008) * 300,
        canvas.height * 0.4 + Math.cos(time * 0.0012) * 200,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        Math.max(canvas.width, canvas.height) * 0.9
      )

      gradient1.addColorStop(0, `hsla(${270 + Math.sin(time * 0.001) * 15}, 85%, 65%, 0.9)`)
      gradient1.addColorStop(0.2, `hsla(${260 + Math.cos(time * 0.0015) * 20}, 80%, 55%, 0.7)`)
      gradient1.addColorStop(0.5, `hsla(${250 + Math.sin(time * 0.0008) * 25}, 75%, 45%, 0.5)`)
      gradient1.addColorStop(0.8, `hsla(${240 + Math.cos(time * 0.001) * 15}, 70%, 35%, 0.3)`)
      gradient1.addColorStop(1, `hsla(${230 + Math.sin(time * 0.0012) * 10}, 65%, 25%, 0.1)`)

      return gradient1
    }

    const createSecondaryGradient = (time: number) => {
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 0.001) * 250,
        canvas.height * 0.6 + Math.sin(time * 0.0015) * 180,
        0,
        canvas.width * 0.6,
        canvas.height * 0.4,
        Math.max(canvas.width, canvas.height) * 0.7
      )

      gradient2.addColorStop(0, `hsla(${290 + Math.cos(time * 0.0012) * 20}, 90%, 70%, 0.6)`)
      gradient2.addColorStop(0.3, `hsla(${280 + Math.sin(time * 0.001) * 25}, 85%, 60%, 0.4)`)
      gradient2.addColorStop(0.6, `hsla(${270 + Math.cos(time * 0.0008) * 30}, 80%, 50%, 0.3)`)
      gradient2.addColorStop(1, `hsla(${260 + Math.sin(time * 0.0015) * 15}, 75%, 40%, 0.1)`)

      return gradient2
    }

    const createFlowingShapes = (time: number) => {
      // Create flowing organic shapes
      for (let i = 0; i < 3; i++) {
        const centerX = canvas.width * (0.2 + i * 0.3) + Math.sin(time * 0.0005 + i * 2) * 150
        const centerY = canvas.height * (0.3 + i * 0.2) + Math.cos(time * 0.0008 + i * 1.5) * 120
        
        const gradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, 200 + Math.sin(time * 0.001 + i) * 50
        )
        
        gradient.addColorStop(0, `hsla(${280 + i * 20 + Math.sin(time * 0.001) * 30}, 90%, 70%, ${0.3 + Math.abs(Math.sin(time * 0.002 + i)) * 0.2})`)
        gradient.addColorStop(0.5, `hsla(${270 + i * 15 + Math.cos(time * 0.0015) * 25}, 85%, 60%, ${0.2 + Math.abs(Math.cos(time * 0.001 + i)) * 0.1})`)
        gradient.addColorStop(1, `hsla(${260 + i * 10 + Math.sin(time * 0.0008) * 20}, 80%, 50%, 0)`)
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(centerX, centerY, 200 + Math.sin(time * 0.001 + i) * 50, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const animate = () => {
      time += 12
      
      // Clear canvas with base gradient
      const baseGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      baseGradient.addColorStop(0, '#1a1a2e')
      baseGradient.addColorStop(0.5, '#16213e')
      baseGradient.addColorStop(1, '#0f3460')
      
      ctx.fillStyle = baseGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Apply flowing gradients
      ctx.globalCompositeOperation = 'screen'
      
      const gradient1 = createFlowingGradient(time)
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      const gradient2 = createSecondaryGradient(time)
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Add flowing shapes
      createFlowingShapes(time)
      
      // Add subtle particles
      ctx.globalCompositeOperation = 'source-over' as GlobalCompositeOperation;
      for (let i = 0; i < 30; i++) {
        const x = (Math.sin(time * 0.0003 + i * 0.5) * canvas.width * 0.4) + canvas.width * 0.5
        const y = (Math.cos(time * 0.0005 + i * 0.3) * canvas.height * 0.4) + canvas.height * 0.5
        const size = Math.abs(Math.sin(time * 0.001 + i)) * 2 + 1
        const opacity = Math.abs(Math.sin(time * 0.002 + i)) * 0.3 + 0.1
        
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${290 + i * 5}, 80%, 80%, ${opacity})`
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
    />
  )
}
