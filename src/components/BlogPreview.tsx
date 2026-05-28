import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogData } from '../data'

function BlogPreview() {
  const latestPosts = blogData.slice(0, 3)

  return (
    <section className="min-h-screen px-6 py-20" id="blog"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            最新博客
          </h2>
          <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
            分享技术心得和学习笔记
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <div
              key={post.id}
              className="rounded-xl border p-6 transition-all duration-150 ease-out hover:-translate-y-2 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: 'easeOut', delay: index * 0.1 },
                }}
                viewport={{ once: true }}
              >
              <span
                className="mb-3 inline-block rounded-full px-3 py-1 text-sm"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--accent-color)',
                }}
              >
                {post.category}
              </span>

              <h3 className="mb-3 text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {post.title}
              </h3>

              <p className="mb-4 line-clamp-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {post.date}
                </span>

                <Link
                  to={`/blog/${post.id}`}
                  className="text-sm font-medium"
                  style={{ color: 'var(--accent-color)' }}
                >
                  阅读更多 →
                </Link>
              </div>
            </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block rounded-xl border px-6 py-3 font-medium transition-all duration-200 hover:bg-card hover:-translate-y-0.5"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            查看全部博客
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
