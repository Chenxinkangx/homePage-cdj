function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-6 py-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-4 flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            GitHub
          </a>
          <a
            href="https://gitee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Gitee
          </a>
        </div>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          © {currentYear} 陈德健. All rights reserved.
        </p>
        <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
          Built with React + TypeScript + TailwindCSS
        </p>
      </div>
    </footer>
  )
}

export default Footer