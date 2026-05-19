function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm text-gray-400">
          Welcome to my personal website
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          你好，我是陈德健
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          我正在学习前端开发、React、AI 编程和个人网站建设。
          这个网站会用来展示我的项目、生活、兴趣和成长记录。
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-xl bg-white px-5 py-3 font-medium text-gray-950 hover:bg-gray-200">
            查看项目
          </button>

          <button className="rounded-xl border border-gray-700 px-5 py-3 font-medium text-white hover:bg-gray-900">
            关于我
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
