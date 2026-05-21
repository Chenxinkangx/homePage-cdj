// 导入滚动动画 Hook
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Projects() {
  // 使用 Hook 监听 section 的可见性
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

  // 延迟类数组，给每个项目卡片设置不同的延迟时间
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
      className={`min-h-screen bg-gray-950 px-6 py-20 text-white animate-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold">我的项目</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              // 给每个卡片添加动画类和对应的延迟类
              className={`rounded-xl border border-gray-700 bg-gray-800 p-6 transition-transform hover:scale-105 animate-on-scroll ${delayClasses[index]}`}
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