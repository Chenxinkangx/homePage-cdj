import { useEffect, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { Reveal } from './Reveal'
import { aboutData } from '../data'
import { SplitText } from './SplitText'

function RollingCounter({ target }: { target: number }) {
  const count = useMotionValue(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const unsubscribe = count.on('change', (v) => {
      if (ref.current) ref.current.textContent = String(Math.round(v))
    })
    const controls = animate(count, target, { duration: 1.5, ease: 'easeOut' })
    return () => {
      unsubscribe()
      controls.stop()
    }
  }, [count, target])

  return <span ref={ref}>0</span>
}

function About() {
  const { title, paragraphs, stats } = aboutData

  return (
    <section className="min-h-screen px-6 py-20" id="about"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="mb-12 h-px w-24"
          style={{ background: 'var(--accent-color)' }}
        />

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <span
              className="text-8xl font-bold leading-none"
              style={{ color: 'var(--accent-color)', opacity: 0.15 }}
            >
              &ldquo;
            </span>
            <h2 className="mt-2 text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
              <SplitText text={title} as="span" />
            </h2>
          </div>

          <div className="md:col-span-3 space-y-6 text-lg leading-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => {
            const numValue = parseInt(stat.value, 10) || 0
            const suffix = stat.value.replace(/[\d]/g, '')
            return (
              <Reveal key={index} direction="up" delay={index * 0.1} as="div"
                className="rounded-lg p-4 text-center"
                style={{ backgroundColor: 'var(--bg-card)' }}
              >
                <div className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {numValue > 0 ? <RollingCounter target={numValue} /> : stat.value}
                  {suffix}
                </div>
                <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
