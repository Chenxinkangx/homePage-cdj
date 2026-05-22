import { Link } from 'react-router-dom'
import { blogData } from '../data'

function Blog() {
  return (
    <div className="min-h-screen px-6 py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold text-center" style={{ color: 'var(--text-primary)' }}>
          我的博客
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {blogData.map((post) => (
            <article
              key={post.id}
              className="rounded-xl border p-6 transition-all hover:scale-105 cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <span
                className="mb-2 inline-block rounded-full px-3 py-1 text-sm"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--accent-color)',
                }}
              >
                {post.category}
              </span>

              <h2
                className="mb-3 text-xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                {post.title}
              </h2>

              <p className="mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {post.date}
                </span>

                <Link
                  to={`/blog/${post.id}`}
                  className="text-sm font-medium transition-colors"
                  style={{ color: 'var(--accent-color)' }}
                >
                  阅读更多 →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog