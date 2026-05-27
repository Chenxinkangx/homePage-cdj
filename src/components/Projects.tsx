import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { projectsData } from '../data'
import Modal from './Modal'

function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return
    const scrollLeft = scrollRef.current.scrollLeft
    const cardWidth = scrollRef.current.clientWidth * 0.7 + 32
    const index = Math.round(scrollLeft / cardWidth)
    setActiveIndex(Math.min(index, projectsData.length - 1))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.clientWidth * 0.7 + 32
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
  }

  const handleCardClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 overflow-hidden" id="projects"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>我的项目</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-8 px-[calc((100%-76rem)/2)] snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projectsData.map((project, index) => {
          const isActive = index === activeIndex
          return (
            <motion.div
              key={index}
              className="flex-shrink-0 snap-center cursor-pointer rounded-xl border p-8"
              style={{
                width: '70vw',
                maxWidth: '720px',
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
                scale: isActive ? 1 : 0.9,
                opacity: isActive ? 1 : 0.6,
                filter: isActive ? 'blur(0px)' : 'blur(2px)',
              }}
              onClick={() => handleCardClick(project)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div
                className="h-2 w-20 rounded-full mb-6"
                style={{ background: 'var(--accent-color)' }}
              />
              <h3 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              <p className="mb-6 text-lg leading-7" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}
                    className="rounded-full px-3 py-1 text-sm"
                    style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--accent-color)' }}>
                点击查看详情 →
              </p>
            </motion.div>
          )
        })}
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {projectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className="rounded-full transition-all duration-300"
            style={{
              width: index === activeIndex ? 24 : 8,
              height: 8,
              backgroundColor: index === activeIndex ? 'var(--accent-color)' : 'var(--text-muted)',
            }}
            aria-label={`跳转到项目 ${index + 1}`}
          />
        ))}
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
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
              <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>技术栈</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index}
                    className="rounded-full px-3 py-1 text-sm"
                    style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
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
