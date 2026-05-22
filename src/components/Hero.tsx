import { heroData } from '../data'

function Hero() {
  const { welcomeText, name, description, ctaPrimary, ctaSecondary } = heroData

  return (
    <section 
      id="hero" 
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <p className="mb-4 text-sm" style={{ color: 'var(--text-muted)' }}>
        {welcomeText}
      </p>

      <h1 className="text-4xl font-bold md:text-6xl" style={{ color: 'var(--text-primary)' }}>
        {name}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href={ctaPrimary.href}
          className="rounded-xl px-5 py-3 font-medium transition-opacity hover:opacity-90"
          style={{ 
            backgroundColor: 'var(--accent-color)',
            color: 'white',
          }}
        >
          {ctaPrimary.text}
        </a>

        <a
          href={ctaSecondary.href}
          className="rounded-xl border px-5 py-3 font-medium transition-colors"
          style={{ 
            borderColor: 'var(--border-color)',
            color: 'var(--text-primary)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {ctaSecondary.text}
        </a>
      </div>
    </section>
  )
}

export default Hero