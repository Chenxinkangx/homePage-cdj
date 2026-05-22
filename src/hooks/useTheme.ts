// 导入 React hooks
import { useState, useEffect } from 'react'

// 主题类型定义
type Theme = 'dark' | 'light'

// 主题配置
const themeConfig = {
  dark: {
    '--bg-primary': '#030712',      // 最深背景
    '--bg-secondary': '#111827',    // 次深背景
    '--bg-card': '#1f2937',         // 卡片背景
    '--bg-card-hover': '#374151',   // 卡片悬停
    '--text-primary': '#ffffff',    // 主文字
    '--text-secondary': '#d1d5db',  // 次要文字
    '--text-muted': '#9ca3af',      // 淡化文字
    '--border-color': '#374151',    // 边框颜色
    '--accent-color': '#3b82f6',    // 强调色（蓝色）
  },
  light: {
    '--bg-primary': '#ffffff',      // 白色背景
    '--bg-secondary': '#f9fafb',    // 浅灰背景
    '--bg-card': '#f3f4f6',         // 卡片背景
    '--bg-card-hover': '#e5e7eb',   // 卡片悬停
    '--text-primary': '#111827',    // 主文字
    '--text-secondary': '#374151',  // 次要文字
    '--text-muted': '#6b7280',      // 淡化文字
    '--border-color': '#e5e7eb',    // 边框颜色
    '--accent-color': '#3b82f6',    // 强调色（蓝色）
  },
}

export function useTheme() {
  // 从 localStorage 获取主题，默认 'dark'
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    return saved || 'dark'
  })

  // 切换主题
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  // 当主题变化时，更新 CSS 变量和 localStorage
  useEffect(() => {
    // 获取根元素
    const root = document.documentElement
    
    // 设置 CSS 变量
    const config = themeConfig[theme]
    Object.entries(config).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
    
    // 保存到 localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, toggleTheme }
}