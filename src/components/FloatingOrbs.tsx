import { motion } from 'framer-motion'

interface Orb {
  size: number
  x: number
  y: number
  color: string
  duration: number
  delay: number
}

const orbs: Orb[] = [
  { size: 350, x: 15, y: 20, color: 'var(--accent-color)', duration: 10, delay: 0 },
  { size: 300, x: 75, y: 60, color: 'var(--accent-color)', duration: 12, delay: 2 },
  { size: 250, x: 50, y: 80, color: 'var(--accent-color)', duration: 8, delay: 4 },
]

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            opacity: 0.12,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            x: ['0%', '5%', '-3%', '2%', '0%'],
            y: ['0%', '-4%', '6%', '-2%', '0%'],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
