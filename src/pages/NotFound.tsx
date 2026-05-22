import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="text-center">
        <div className="mb-8 text-9xl font-bold" style={{ color: 'var(--accent-color)' }}>
          404
        </div>
        
        <h1 className="mb-4 text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
          页面未找到
        </h1>
        
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
          抱歉，您访问的页面不存在或已被移动
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Link
            to="/"
            className="rounded-xl px-6 py-3 font-medium transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--accent-color)',
              color: 'white',
            }}
          >
            返回首页
          </Link>
          
          <Link
            to="/blog"
            className="rounded-xl border px-6 py-3 font-medium transition-colors"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            浏览博客
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound