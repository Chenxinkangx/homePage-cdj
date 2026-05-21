import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projectsData } from '../data'

function Projects() {
  const [ref, isVisible] = useScrollAnimation()

  const delayClasses = [
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
  ]

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
              className={`rounded-xl border p-6 transition-transform hover:scale-105 animate-on-scroll ${delayClasses[index]}`}
              style={{ 
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)'
              }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects