import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Life() {
  const [ref, isVisible] = useScrollAnimation()

  const interests = [
    {
      title: '编程学习',
      description: '持续学习前端技术，包括 React、TypeScript、Node.js 等',
      icon: '💻',
    },
    {
      title: 'AI 编程',
      description: '探索 AI 辅助编程工具，提升开发效率',
      icon: '🤖',
    },
    {
      title: '阅读',
      description: '阅读技术书籍和文章，不断充实自己',
      icon: '📚',
    },
    {
      title: '音乐',
      description: '听音乐放松身心，找到工作与生活的平衡',
      icon: '🎵',
    },
    {
      title: '运动',
      description: '保持健康的生活方式，适当运动增强体质',
      icon: '🏃',
    },
    {
      title: '旅行',
      description: '探索新地方，体验不同的文化和风景',
      icon: '✈️',
    },
  ]

  const delayClasses = [
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
    'animate-delay-500',
    'animate-delay-600',
  ]

  return (
    <section
      id="life"
      ref={ref}
      className={`min-h-screen px-6 py-20 animate-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>兴趣与生活</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-center transition-transform hover:scale-105 animate-on-scroll ${delayClasses[index]}`}
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <div className="mb-4 text-5xl">{interest.icon}</div>
              <h3 className="mb-2 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{interest.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{interest.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl p-8 animate-on-scroll animate-delay-300" style={{ backgroundColor: 'var(--bg-card)' }}>
          <h3 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>学习方向</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-2 w-32 rounded" style={{ backgroundColor: 'var(--accent-color)' }}></div>
              <span style={{ color: 'var(--text-secondary)' }}>React 进阶</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-24 rounded" style={{ backgroundColor: 'var(--text-muted)' }}></div>
              <span style={{ color: 'var(--text-secondary)' }}>TypeScript</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-20 rounded" style={{ backgroundColor: 'var(--text-muted)' }}></div>
              <span style={{ color: 'var(--text-secondary)' }}>Node.js</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-16 rounded" style={{ backgroundColor: 'var(--text-muted)' }}></div>
              <span style={{ color: 'var(--text-secondary)' }}>AI 工具</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Life