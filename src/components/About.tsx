import { motion } from 'framer-motion'
import { aboutData } from '../data'

function About() {
  const { title, paragraphs, stats } = aboutData

  return (
    <section className="min-h-screen px-6 py-20" id="about"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="mb-12 h-px w-24"
          style={{ background: 'var(--accent-color)' }}
        />

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <span
              className="text-8xl font-bold leading-none"
              style={{ color: 'var(--accent-color)', opacity: 0.15 }}
            >
              &ldquo;
            </span>
            <h2 className="mt-2 text-3xl font-bold leading-snug tracking-tight" style={{ color: 'var(--text-primary)' }}>
              {title}
            </h2>
          </div>

          <div className="md:col-span-3 space-y-5 text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-lg p-4 text-center"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <div className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {stat.value}
              </div>
              <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
