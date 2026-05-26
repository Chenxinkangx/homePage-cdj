import { motion } from 'framer-motion'
import { heroData } from '../data'
import GradientBackground from './GradientBackground'
import ParticleBackground from './ParticleBackground'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.4 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

function Hero() {
  const { welcomeText, name, description, ctaPrimary, ctaSecondary, ctaTertiary } = heroData

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
      <ParticleBackground particleCount={60} connectionDistance={150} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.p variants={itemVariants} className="mb-4 text-sm" style={{ color: 'var(--text-muted)' }}>
          {welcomeText}
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-4xl font-bold md:text-6xl" style={{ color: 'var(--text-primary)' }}>
          {name}
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg leading-8" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex gap-4">
          <button
            onClick={() => scrollToSection(ctaPrimary.href)}
            className="rounded-xl px-5 py-3 font-medium transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--accent-color)',
              color: 'white',
            }}
          >
            {ctaPrimary.text}
          </button>

          <button
            onClick={() => scrollToSection(ctaSecondary.href)}
            className="rounded-xl border px-5 py-3 font-medium transition-colors"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {ctaSecondary.text}
          </button>

          <button
            onClick={() => scrollToSection(ctaTertiary.href)}
            className="rounded-xl border px-5 py-3 font-medium transition-colors"
            style={{
              borderColor: 'var(--accent-color)',
              color: 'var(--accent-color)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-color)'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--accent-color)'
            }}
          >
            {ctaTertiary.text}
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
