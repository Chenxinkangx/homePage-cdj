import { useParams, Link } from 'react-router-dom'
import { blogData } from '../data'

function BlogDetail() {
  const { id } = useParams<{ id: string }>()

  const post = blogData.find((item) => item.id === id)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            文章未找到
          </h2>
          <Link
            to="/blog"
            className="inline-block rounded-xl px-5 py-3 font-medium"
            style={{
              backgroundColor: 'var(--accent-color)',
              color: 'white',
            }}
          >
            返回博客首页
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm"
          style={{ color: 'var(--accent-color)' }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          返回博客列表
        </Link>

        <span
          className="mb-4 inline-block rounded-full px-3 py-1 text-sm"
          style={{
            backgroundColor: 'var(--bg-card)',
            color: 'var(--accent-color)',
          }}
        >
          {post.category}
        </span>

        <h1 className="mb-6 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
          {post.title}
        </h1>

        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          {post.date}
        </p>

        <div
          className="prose max-w-none"
          style={{ color: 'var(--text-secondary)' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  )
}

export default BlogDetail