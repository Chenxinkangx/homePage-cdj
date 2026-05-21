function Hero() {
  return (
    <section id="hero" className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm" style={{ color: 'var(--text-muted)' }}>
        Welcome to my personal website
      </p>

      <h1 className="text-4xl font-bold md:text-6xl" style={{ color: 'var(--text-primary)' }}>
        你好，我是陈德健
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: 'var(--text-secondary)' }}>
        我正在学习前端开发、React、AI 编程和个人网站建设。
        这个网站会用来展示我的项目、生活、兴趣和成长记录。
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-xl px-5 py-3 font-medium transition-opacity hover:opacity-90"
          style={{ 
            backgroundColor: 'var(--accent-color)',
            color: 'white',
          }}
        >
          查看项目
        </a>

        <a
          href="#about"
          className="rounded-xl border px-5 py-3 font-medium transition-colors"
          style={{ 
            borderColor: 'var(--border-color)',
            color: 'var(--text-primary)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          关于我
        </a>
      </div>
    </section>
  )
}

export default Hero