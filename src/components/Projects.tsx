import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projectsData } from '../data'
import Modal from './Modal'

function Projects() {
  const [ref, isVisible] = useScrollAnimation()
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)

  const delayClasses = [
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
  ]

  const handleCardClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <section
      id="projects"
      ref={ref}
      className={`min-h-screen px-6 py-20 animate-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>我的项目</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl border p-6 transition-all hover:scale-105 cursor-pointer animate-on-scroll ${delayClasses[index]}`}
              style={{ 
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)'
              }}
              onClick={() => handleCardClick(project)}
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
                      color: 'var(--text-muted)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm" style={{ color: 'var(--accent-color)' }}>
                点击查看详情 →
              </p>
            </div>
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
                      color: 'var(--text-muted)'
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
    </section>
  )
}

export default Projects
