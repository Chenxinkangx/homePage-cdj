// 导入 React 的 useState 和 useEffect 钩子
// useState 用于管理组件状态，useEffect 用于处理副作用（如监听滚动事件）
import { useState, useEffect } from 'react'

function Navbar() {
  // 两个状态变量：
  // isScrolled: 记录页面是否滚动超过50px，用于改变导航栏样式
  // isMobileMenuOpen: 记录移动端菜单是否展开
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    // 点击后先关闭移动端菜单
    setIsMobileMenuOpen(false)
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
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg'
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

          {/* 桌面端导航链接：md:hidden 表示在移动端隐藏 */}
          <div className="hidden md:flex items-center gap-8">
            {/* 遍历 navLinks 数组，渲染每个导航按钮 */}
            {navLinks.map((link) => (
              <button
                key={link.name} // key 是 React 列表渲染必需的，用于标识每个元素
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* 移动端汉堡菜单按钮：md:hidden 表示在桌面端隐藏 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // 切换菜单状态
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {/* SVG 图标：根据 isMobileMenuOpen 状态显示不同图标 */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {/* 菜单打开时显示 X 图标 */}
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // 菜单关闭时显示三条横线图标
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 移动端菜单列表：isMobileMenuOpen 为 true 时显示 */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full py-2 text-left text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar