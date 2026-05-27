import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsData } from '../data'

function ProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="rounded-xl border overflow-hidden cursor-pointer group"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-color)',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ y: -2, transition: { duration: 0.2, ease: 'easeOut' } }}
    >
        {/* Accent bar */}
        <div
          className="h-1 w-full origin-left transition-transform duration-300 group-hover:scale-x-105"
          style={{ backgroundColor: 'var(--accent-color)' }}
        />

        <div className="p-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              <p className="text-lg leading-7" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>
            </div>

            {/* Expand indicator */}
            <motion.div
              className="flex-shrink-0 ml-6 mt-1"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ color: 'var(--text-muted)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="rounded-full px-3 py-1 text-sm"
                style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Expanded details */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <p className="mb-6 leading-7" style={{ color: 'var(--text-secondary)' }}>
                    {project.details}
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                        功能特性
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              style={{ color: 'var(--accent-color)' }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                        技术栈
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, ti) => (
                          <span key={ti}
                            className="rounded-md px-3 py-1.5 text-sm"
                            style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--accent-color)' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
  )
}

function Projects() {
  return (
    <section className="px-6 py-20" id="projects"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl font-bold mb-14"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          我的项目
        </motion.h2>

        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
