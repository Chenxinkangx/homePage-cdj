import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroData } from '../data'
import GradientBackground from './GradientBackground'
import ParticleBackground from './ParticleBackground'
import { SplitText } from './SplitText'
import { MagneticButton } from './MagneticButton'

const roles = ['Frontend Developer', 'AI Explorer', 'Design Lover']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

function Hero() {
  const { welcomeText, name, description, ctaPrimary, ctaSecondary, ctaTertiary } = heroData
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <GradientBackground />
      <ParticleBackground particleCount={50} connectionDistance={150} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.p variants={itemVariants} className="mb-4 text-sm tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
          {welcomeText}
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-5xl font-bold md:text-7xl lg:text-8xl" style={{ color: 'var(--text-primary)' }}>
          <SplitText text={name} as="span" />
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-4 h-8">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              className="text-lg md:text-xl font-medium"
              style={{ color: 'var(--accent-color)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg leading-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          {description}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticButton>
            <button
              onClick={() => scrollToSection(ctaPrimary.href)}
              className="relative rounded-xl px-7 py-3.5 font-semibold tracking-wide overflow-hidden group"
              style={{ color: 'white' }}
            >
              <span
                className="absolute inset-0 transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
                style={{
                  background: `linear-gradient(135deg, var(--accent-color), #8b5cf6)`,
                  boxShadow: `0 4px 20px rgba(59, 130, 246, 0.35)`,
                }}
              />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: 'inset 0 0 30px rgba(255,255,255,0.15)' }}
              />
              <span className="relative z-10">{ctaPrimary.text}</span>
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => scrollToSection(ctaSecondary.href)}
              className="relative rounded-xl px-7 py-3.5 font-semibold tracking-wide overflow-hidden group transition-all duration-300"
              style={{
                color: 'var(--text-primary)',
                backgroundColor: 'color-mix(in srgb, var(--text-primary) 5%, transparent)',
                backdropFilter: 'blur(4px)',
                border: '1px solid var(--border-color)',
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{ backgroundColor: 'color-mix(in srgb, var(--accent-color) 10%, transparent)' }}
              />
              <span className="relative z-10 flex items-center gap-2">
                {ctaSecondary.text}
              </span>
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => scrollToSection(ctaTertiary.href)}
              className="relative rounded-xl px-7 py-3.5 font-semibold tracking-wide overflow-hidden group transition-all duration-300"
              style={{
                color: 'var(--accent-color)',
                backgroundColor: 'transparent',
                border: '1px solid var(--accent-color)',
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{ backgroundColor: 'var(--accent-color)' }}
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {ctaTertiary.text}
              </span>
            </button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: 'var(--text-muted)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
