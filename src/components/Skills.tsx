import { motion } from 'framer-motion'
import { skillsData } from '../data'
import { cardAnimation } from '../utils/variants'

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
            <motion.div
              key={catIndex}
              className="rounded-xl p-6 transition-shadow duration-300 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
              }}
              {...cardAnimation}
              transition={{ duration: 0.5, ease: 'easeOut', delay: catIndex * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="mb-6 text-xl font-bold inline-block relative" style={{ color: 'var(--accent-color)' }}>
                {category.name}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 w-full rounded"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                />
              </h3>
              <div className="mt-4 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 rounded-lg p-3 transition-all duration-200 hover:translate-x-1"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    {/* Level indicator dots */}
                    <div className="flex gap-0.5 flex-shrink-0">
                      {[0, 1, 2, 3, 4].map((dot) => (
                        <div
                          key={dot}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: dot * 20 < skill.level ? 'var(--accent-color)' : 'var(--text-muted)',
                            opacity: dot * 20 < skill.level ? 1 : 0.3,
                          }}
                        />
                      ))}
                    </div>
                    <span className="font-medium flex-1" style={{ color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
