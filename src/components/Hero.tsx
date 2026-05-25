import { heroData } from '../data'

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
      </div>
    </section>
  )
}

export default Hero