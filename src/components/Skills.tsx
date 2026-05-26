import { motion } from 'framer-motion'
import { skillsData } from '../data'

function Skills() {
  return (
    <section className="min-h-screen px-6 py-20" id="skills"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold text-center" style={{ color: 'var(--text-primary)' }}>
          {skillsData.title}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {skillsData.categories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="rounded-xl p-6"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <h3 className="mb-4 text-xl font-bold" style={{ color: 'var(--accent-color)' }}>
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: 'var(--accent-color)' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: skillIndex * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
