function Life() {
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

  return (
    <section id="life" className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold">兴趣与生活</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="rounded-xl bg-gray-900 p-6 text-center transition-transform hover:scale-105"
            >
              <div className="mb-4 text-5xl">{interest.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{interest.title}</h3>
              <p className="text-gray-400">{interest.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-gray-900 p-8">
          <h3 className="mb-4 text-2xl font-bold">学习方向</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-2 w-32 rounded bg-white"></div>
              <span>React 进阶</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-24 rounded bg-gray-400"></div>
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-20 rounded bg-gray-500"></div>
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-16 rounded bg-gray-600"></div>
              <span>AI 工具</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Life
