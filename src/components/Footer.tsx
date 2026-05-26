import { Reveal } from './Reveal'
import { footerData } from '../data'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { copyright, links } = footerData

  return (
    <Reveal direction="up" as="footer" className="px-6 py-8"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-4 flex justify-center gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
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
