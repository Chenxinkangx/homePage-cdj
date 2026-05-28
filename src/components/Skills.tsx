import { motion } from 'framer-motion'
import { skillsData } from '../data'

function Skills() {
  return (
    <section className="min-h-screen px-6 py-20" id="skills"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold text-center tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {skillsData.title}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {skillsData.categories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="rounded-xl p-6 transition-all duration-150 ease-out hover:-translate-y-2 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: 'easeOut', delay: catIndex * 0.1 },
                }}
                viewport={{ once: true }}
              >
              <h3 className="mb-6 text-xl font-bold inline-block relative" style={{ color: 'var(--accent-color)' }}>
                {category.name}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 w-full rounded"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                />
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 rounded-lg p-3"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: 'var(--accent-color)' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
