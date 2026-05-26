import { useMemo } from 'react'
import type { CSSProperties, ElementType, ReactNode } from 'react'
import { motion } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right'

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  distance?: number
  as?: ElementType
  id?: string
  style?: CSSProperties
  [key: string]: unknown
}

const directionOffset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  distance = 60,
  as = 'div',
  id,
  style,
  ...rest
}: RevealProps) {
  const offset = directionOffset[direction]
  const MotionComponent = useMemo(() => motion(as), [as])

  return (
    <MotionComponent
      className={className}
      id={id}
      style={style}
      {...rest}
      initial={{
        opacity: 0,
        x: offset.x ? offset.x * distance : 0,
        y: offset.y ? offset.y * distance : 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionComponent>
  )
}
