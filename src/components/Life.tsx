import { Reveal } from './Reveal'
import { lifeData } from '../data'

function Life() {
  const { title, interests, learningSection } = lifeData

  return (
    <section className="min-h-screen px-6 py-20" id="life"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {interests.map((interest, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1} as="div"
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <div className="mb-4 text-5xl">{interest.icon}</div>
              <h3 className="mb-2 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{interest.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{interest.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.3} as="div"
          className="mt-16 rounded-xl p-8"
          style={{ backgroundColor: 'var(--bg-card)' }}
        >
          <h3 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{learningSection.title}</h3>
          <div className="space-y-4">
            {learningSection.items.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="h-2 rounded"
                  style={{
                    width: `${item.progress}px`,
                    backgroundColor: index === 0 ? 'var(--accent-color)' : 'var(--text-muted)',
                  }}
                ></div>
                <span style={{ color: 'var(--text-secondary)' }}>{item.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Life
