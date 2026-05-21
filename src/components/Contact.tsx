// 导入滚动动画 Hook
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Contact() {
  // 使用 Hook 监听 section 的可见性
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="contact"
      ref={ref}
      className={`min-h-screen bg-gray-800 px-6 py-20 text-white animate-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold">联系我</h2>
        <p className="mb-12 text-lg text-gray-400">
          如果你有任何问题、建议或者想要交流，欢迎联系我！
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-gray-700 p-6 transition-transform hover:scale-105 animate-on-scroll animate-delay-100"
          >
            <div className="mb-3 text-4xl">🐙</div>
            <h3 className="text-xl font-bold">GitHub</h3>
            <p className="mt-2 text-sm text-gray-400">查看我的开源项目</p>
          </a>

          <a
            href="https://gitee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-gray-700 p-6 transition-transform hover:scale-105 animate-on-scroll animate-delay-200"
          >
            <div className="mb-3 text-4xl">🐮</div>
            <h3 className="text-xl font-bold">Gitee</h3>
            <p className="mt-2 text-sm text-gray-400">国内代码托管平台</p>
          </a>

          <a
            href="mailto:example@email.com"
            className="block rounded-xl bg-gray-700 p-6 transition-transform hover:scale-105 animate-on-scroll animate-delay-300"
          >
            <div className="mb-3 text-4xl">📧</div>
            <h3 className="text-xl font-bold">邮箱</h3>
            <p className="mt-2 text-sm text-gray-400">发送邮件联系我</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact