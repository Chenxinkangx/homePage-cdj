import { footerData } from '../data'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { copyright, links } = footerData

  return (
    <footer className="px-6 py-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
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
    </footer>
  )
}

export default Footer