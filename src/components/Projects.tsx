function Projects() {
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

  return (
    <section id="projects" className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold">我的项目</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition-transform hover:scale-105"
            >
              <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
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
