import React, { useState } from 'react'
import { guestbookData } from '../data'
import type { GuestbookEntry } from '../data/guestbook'

function Guestbook() {
  const { title, description, placeholder, submitButton, initialEntries } = guestbookData
  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries)
  const [nickname, setNickname] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const [focused, setFocused] = useState<'nickname' | 'content' | null>(null)

  const formatDate = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return '刚刚'
    if (minutes < 60) return `${minutes}分钟前`
    if (hours < 24) return `${hours}小时前`
    if (days < 7) return `${days}天前`
    return date.toLocaleDateString('zh-CN')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!nickname.trim()) {
      setError('请输入昵称')
      return
    }
    if (!content.trim()) {
      setError('请输入留言内容')
      return
    }

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      nickname: nickname.trim(),
      content: content.trim(),
      timestamp: new Date(),
    }

    setEntries([newEntry, ...entries])
    setNickname('')
    setContent('')
  }

  return (
    <section className="min-h-screen px-6 py-20" id="guestbook"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>{title}</h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>
        </div>

        <div
          className="rounded-xl p-6 mb-8"
          style={{ backgroundColor: 'var(--bg-card)' }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder={placeholder.nickname}
              onFocus={() => setFocused('nickname')}
              onBlur={() => setFocused(null)}
              className="w-full rounded-lg px-4 py-3 outline-none transition-shadow"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                boxShadow: focused === 'nickname' ? '0 0 0 2px var(--accent-color)' : 'none',
              }}
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={placeholder.content}
              rows={4}
              onFocus={() => setFocused('content')}
              onBlur={() => setFocused(null)}
              className="w-full rounded-lg px-4 py-3 outline-none transition-shadow resize-none"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                boxShadow: focused === 'content' ? '0 0 0 2px var(--accent-color)' : 'none',
              }}
            />
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.98]"
              style={{
                backgroundColor: 'var(--accent-color)',
                color: 'white',
              }}
            >
              {submitButton}
            </button>
          </form>
        </div>

        <div className="space-y-4">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-xl p-6"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}
                  >
                    {entry.nickname.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {entry.nickname}
                  </span>
                </div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {formatDate(entry.timestamp)}
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>{entry.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Guestbook
