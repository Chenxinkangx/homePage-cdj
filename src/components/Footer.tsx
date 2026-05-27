import { Reveal } from './Reveal'
import { footerData } from '../data'
import { motion } from 'framer-motion'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { copyright, links } = footerData

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Reveal direction="up" distance={0} as="footer" className="px-6 py-8 relative"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.button
          onClick={scrollToTop}
          className="mx-auto mb-6 flex items-center justify-center w-10 h-10 rounded-full transition-colors"
          style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-muted)' }}
          whileHover={{ y: -3, backgroundColor: 'var(--bg-card-hover)' }}
          whileTap={{ scale: 0.9 }}
          aria-label="回到顶部"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>

        <div className="mb-4 flex justify-center gap-6">
          {links.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {link.name}
            </a>
          ))}
        </div>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {copyright.replace('2024', currentYear.toString())}
        </p>
        <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
          Built with React + TypeScript + TailwindCSS
        </p>
      </div>
    </Reveal>
  )
}

export default Footer
