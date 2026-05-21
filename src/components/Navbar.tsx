// 导入 React 的 useState 和 useEffect 钩子
import { useState, useEffect } from 'react'

function Navbar() {
  // isScrolled: 记录页面是否滚动超过50px，用于改变导航栏样式
  const [isScrolled, setIsScrolled] = useState(false)

  // useEffect: 在组件挂载时执行一次
  // 监听 window 的 scroll 事件，滚动时更新 isScrolled 状态
  useEffect(() => {
    // 滚动处理函数：当滚动距离超过50px时设置 isScrolled 为 true
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll)
    
    // 清理函数：组件卸载时移除事件监听，防止内存泄漏
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // 空数组表示只在组件挂载时执行一次

  // 导航链接数据：用数组存储，方便动态渲染
  const navLinks = [
    { name: '首页', href: '#hero' },
    { name: '关于', href: '#about' },
    { name: '项目', href: '#projects' },
    { name: '生活', href: '#life' },
    { name: '联系', href: '#contact' },
  ]

  // 滚动到指定区域的函数
  const scrollToSection = (href: string) => {
    // 根据 href 找到页面中的元素
    const element = document.querySelector(href)
    // 如果找到元素，平滑滚动到该位置
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    // 固定定位的导航栏，z-50 确保在页面最顶层
    // 根据 isScrolled 状态动态切换样式：滚动后显示背景和模糊效果
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* 导航栏内容容器，max-w-6xl 限制最大宽度，px-6 设置左右内边距 */}
      <div className="mx-auto max-w-6xl px-6">
        {/* flex 布局：Logo 在左边，导航链接在右边 */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo 按钮：点击返回首页 */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-xl font-bold hover:text-gray-400 transition-colors"
          >
            陈德健
          </button>

          {/* 桌面端导航链接 */}
          <div className="flex items-center gap-8">
            {/* 遍历 navLinks 数组，渲染每个导航按钮 */}
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar