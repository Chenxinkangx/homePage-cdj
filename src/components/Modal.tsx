import { useEffect } from 'react'

// Modal组件的属性类型定义
interface ModalProps {
  isOpen: boolean          // 控制模态框是否显示
  onClose: () => void      // 关闭模态框的回调函数
  title: string            // 模态框标题
  children: React.ReactNode // 模态框内容（React子元素）
}

/**
 * 通用模态框组件
 * 支持点击遮罩层关闭、按ESC键关闭、带动画效果
 */
function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // useEffect用于处理副作用：监听键盘事件和控制页面滚动
  useEffect(() => {
    // 定义ESC键处理函数
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    // 当模态框打开时
    if (isOpen) {
      // 添加键盘事件监听（按ESC关闭）
      document.addEventListener('keydown', handleEscape)
      // 禁止页面背景滚动
      document.body.style.overflow = 'hidden'
    }

    // 清理函数：组件卸载或依赖项变化时执行
    return () => {
      // 移除键盘事件监听，防止内存泄漏
      document.removeEventListener('keydown', handleEscape)
      // 恢复页面滚动
      document.body.style.overflow = ''
    }
    // 依赖数组：只有isOpen或onClose变化时才重新执行
  }, [isOpen, onClose])

  // 如果模态框未打开，返回null（不渲染任何内容）
  if (!isOpen) {
    return null
  }

  return (
    // 外层容器：全屏覆盖，用于点击关闭
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose} // 点击遮罩层关闭模态框
    >
      {/* 遮罩层：半透明背景，模糊效果 */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true" // 告诉屏幕阅读器忽略此元素
      ></div>

      {/* 模态框主体：白色卡片 */}
      <div
        className="relative w-full max-w-lg mx-4 rounded-xl p-6 animate-modal"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
          borderWidth: '1px',
        }}
        onClick={(e) => e.stopPropagation()} // 阻止事件冒泡到父级
      >
        {/* 头部：标题 + 关闭按钮 */}
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h2>
          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-opacity-50 transition-colors"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
            aria-label="Close modal" // 无障碍标签
          >
            {/* SVG关闭图标 */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'var(--text-secondary)' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" // 对角线组成的X形
              />
            </svg>
          </button>
        </div>

        {/* 内容区域：显示children，支持滚动 */}
        <div
          className="max-h-[70vh] overflow-y-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal