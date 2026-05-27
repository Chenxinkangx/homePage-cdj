import { useMemo } from 'react'
import type { ElementType } from 'react'
import { motion } from 'framer-motion'

type SplitType = 'char' | 'word'

interface SplitTextProps {
  text: string
  as?: ElementType
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  splitBy?: SplitType
  once?: boolean
  id?: string
}

const charVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.04,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export function SplitText({
  text,
  as: Tag = 'span',
  className,
  delay = 0,
  duration,
  stagger = 0.04,
  splitBy = 'char',
  once = false,
  id,
}: SplitTextProps) {
  const items = useMemo(
    () => (splitBy === 'char' ? text.split('') : text.split(' ')),
    [text, splitBy],
  )

  const variants = splitBy === 'char' ? charVariants : wordVariants

  return (
    <Tag className={className} id={id} style={{ display: 'inline', overflow: 'hidden' }}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: !once, amount: 0.5 }}
          style={{ display: splitBy === 'char' ? 'inline-block' : 'inline-block', whiteSpace: splitBy === 'word' ? 'pre' : undefined }}
        >
          {item}
        </motion.span>
      ))}
    </Tag>
  )
}
