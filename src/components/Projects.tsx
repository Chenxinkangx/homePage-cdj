import { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Reveal } from './Reveal'
import { projectsData } from '../data'
import Modal from './Modal'

function ProjectCard({ project, onClick: handleClick }: { project: typeof projectsData[0]; onClick: () => void }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d' as const,
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-color)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="rounded-xl border p-6 cursor-pointer"
      onClick={handleClick}
    >
      <h3 className="mb-3 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
      <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="rounded-full px-3 py-1 text-sm"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-muted)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm" style={{ color: 'var(--accent-color)' }}>
        点击查看详情 →
      </p>
    </motion.div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)

  const handleCardClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <Reveal direction="left" as="section" className="min-h-screen px-6 py-20" id="projects"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>我的项目</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => handleCardClick(project)} />
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-4">
            <p>{selectedProject.details}</p>
            <div>
              <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>功能特性</h4>
              <ul className="space-y-1">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--accent-color)' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>技术栈</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-full px-3 py-1 text-sm"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Reveal>
  )
}

export default Projects
