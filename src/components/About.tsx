import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { aboutData } from '../data'

function About() {
  const [ref, isVisible] = useScrollAnimation()
  const { title, paragraphs, stats } = aboutData

  const delayClasses = [
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
  ]

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen px-6 py-20 animate-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h2>

        <div className="space-y-6 text-lg leading-8" style={{ color: 'var(--text-secondary)' }}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 text-center animate-on-scroll ${delayClasses[index]}`}
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About