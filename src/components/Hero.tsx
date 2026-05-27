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
      <ParticleBackground particleCount={30} connectionDistance={150} />

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

        <motion.div variants={itemVariants} className="mt-8 flex gap-4">
          <MagneticButton>
            <button
              onClick={() => scrollToSection(ctaPrimary.href)}
              className="rounded-xl px-5 py-3 font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}
            >
              {ctaPrimary.text}
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => scrollToSection(ctaSecondary.href)}
              className="rounded-xl border px-5 py-3 font-medium transition-colors"
              style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
            >
              {ctaSecondary.text}
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => scrollToSection(ctaTertiary.href)}
              className="rounded-xl border px-5 py-3 font-medium"
              style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}
            >
              {ctaTertiary.text}
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
