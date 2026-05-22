// 导入 React 的 hooks
import { useEffect, useRef, useState } from 'react'

/**
 * 滚动动画 Hook：检测元素是否进入视口
 * @param options IntersectionObserver 的配置选项
 * @returns [ref, isVisible] - ref 要绑定到元素上，isVisible 表示元素是否可见
 */
export function useScrollAnimation(options = {}) {
  // 创建一个 ref，用于绑定到要观察的 DOM 元素上
  const ref = useRef<HTMLElement>(null)
  
  // 创建状态：记录元素是否进入视口
  const [isVisible, setIsVisible] = useState(false)

  // useEffect：在组件挂载时设置 IntersectionObserver
  useEffect(() => {
    // IntersectionObserver 的默认配置
    const defaultOptions = {
      root: null,           // 默认使用视口作为根
      rootMargin: '0px',    // 根元素的边距
      threshold: 0.1,       // 元素出现10%时触发
      ...options,           // 合并用户传入的配置
    }

    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver((entries) => {
      // entries 是所有被观察的元素的数组
      entries.forEach((entry) => {
        // entry.isIntersecting 表示元素是否进入视口
        if (entry.isIntersecting) {
          // 元素进入视口，设置 isVisible 为 true
          setIsVisible(true)
          // 动画触发后，停止观察这个元素（避免重复触发）
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    // 获取 ref 绑定的 DOM 元素
    const element = ref.current
    if (element) {
      // 开始观察这个元素
      observer.observe(element)
    }

    // 清理函数：组件卸载时停止观察
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options]) // 依赖项：options 变化时重新设置

  // 返回 ref 和 isVisible，供组件使用
  return [ref, isVisible] as const
}