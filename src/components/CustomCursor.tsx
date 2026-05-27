import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useSpring(0, { stiffness: 150, damping: 15 })
  const mouseY = useSpring(0, { stiffness: 150, damping: 15 })

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    if (!isDesktop) return

    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, input, textarea, [data-cursor]')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full"
      style={{
        x: mouseX,
        y: mouseY,
        width: isHovering ? 60 : 40,
        height: isHovering ? 60 : 40,
        translateX: '-50%',
        translateY: '-50%',
        background: 'var(--accent-color)',
        opacity: isHovering ? 0.25 : 0.15,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    />
  )
}
