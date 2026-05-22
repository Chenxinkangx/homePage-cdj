import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { lifeData } from '../data'

function Life() {
  const [ref, isVisible] = useScrollAnimation()
  const { title, interests, learningSection } = lifeData

  const delayClasses = [
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
    'animate-delay-500',
    'animate-delay-600',
  ]

  return (
    <section
      id="life"
      ref={ref}
      className={`min-h-screen px-6 py-20 animate-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-center transition-transform hover:scale-105 animate-on-scroll ${delayClasses[index]}`}
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <div className="mb-4 text-5xl">{interest.icon}</div>
              <h3 className="mb-2 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{interest.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{interest.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl p-8 animate-on-scroll animate-delay-300" style={{ backgroundColor: 'var(--bg-card)' }}>
          <h3 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{learningSection.title}</h3>
          <div className="space-y-4">
            {learningSection.items.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div 
                  className="h-2 rounded" 
                  style={{ 
                    width: `${item.progress}px`,
                    backgroundColor: index === 0 ? 'var(--accent-color)' : 'var(--text-muted)'
                  }}
                ></div>
                <span style={{ color: 'var(--text-secondary)' }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Life