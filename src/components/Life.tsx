import { motion } from 'framer-motion'
import { lifeData } from '../data'

function Life() {
  const { title, interests, learningSection } = lifeData

  return (
    <section className="min-h-screen px-6 py-20" id="life"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>{title}</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{
                backgroundColor: 'var(--bg-card)',
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="mb-4 text-5xl transition-transform duration-300 hover:scale-110">
                {interest.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{interest.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{interest.description}</p>
            </motion.div>
          ))}
        </div>

        <div
          className="mt-16 rounded-xl p-8"
          style={{ backgroundColor: 'var(--bg-card)' }}
        >
          <h3 className="mb-6 text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>{learningSection.title}</h3>
          <div className="space-y-5">
            {learningSection.items.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span style={{ color: 'var(--text-secondary)' }}>{item.name}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{item.progress}%</span>
                </div>
                <div className="h-2 rounded-full" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Life
