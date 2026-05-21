import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Projects() {
  const [ref, isVisible] = useScrollAnimation()

  const projects = [
    {
      title: '个人主页',
      description: '使用 React + TypeScript + TailwindCSS 构建的响应式个人网站，展示项目和个人信息。',
      tags: ['React', 'TypeScript', 'TailwindCSS'],
    },
    {
      title: '待办事项应用',
      description: '一个简单的待办事项管理应用，支持添加、删除和标记完成任务。',
      tags: ['React', 'Hooks', 'LocalStorage'],
    },
    {
      title: '天气查询小工具',
      description: '调用天气 API 实现实时天气查询，支持城市搜索和天气预报展示。',
      tags: ['JavaScript', 'API', 'CSS'],
    },
    {
      title: '计算器',
      description: '使用原生 JavaScript 实现的简易计算器，支持基本四则运算。',
      tags: ['JavaScript', 'HTML', 'CSS'],
    },
  ]

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
          {projects.map((project, index) => (
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