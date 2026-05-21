import { useScrollAnimation } from '../hooks/useScrollAnimation'

function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen px-6 py-20 animate-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>关于我</h2>

        <div className="space-y-6 text-lg leading-8" style={{ color: 'var(--text-secondary)' }}>
          <p>
            你好！我是一名前端开发学习者，目前专注于 React 和现代前端技术。
          </p>
          <p>
            我对新技术充满好奇心，喜欢动手实践，正在努力提升自己的编程技能。
            通过这个网站，我想记录自己的学习历程，分享一些项目经验。
          </p>
          <p>
            除了编程，我也喜欢探索新事物，持续学习和成长是我的人生信条。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-lg p-4 text-center animate-on-scroll animate-delay-100" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>1年+</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>学习时间</div>
          </div>
          <div className="rounded-lg p-4 text-center animate-on-scroll animate-delay-200" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>5个</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>项目作品</div>
          </div>
          <div className="rounded-lg p-4 text-center animate-on-scroll animate-delay-300" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>3个</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>技能方向</div>
          </div>
          <div className="rounded-lg p-4 text-center animate-on-scroll animate-delay-400" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>持续</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>学习中</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About