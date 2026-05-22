export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
}

export const blogData: BlogPost[] = [
  {
    id: '1',
    title: 'React Hooks 入门指南',
    excerpt: '本文介绍 React Hooks 的基本概念，包括 useState、useEffect 等常用 Hook 的使用方法。',
    content: '<p>React Hooks 是 React 16.8 引入的新特性，让我们可以在函数组件中使用状态和其他 React 特性。</p><h3>useState</h3><p>useState 是最基础的 Hook，用于在函数组件中添加状态。它返回一个状态值和一个更新状态的函数。</p><h3>useEffect</h3><p>useEffect 用于处理副作用，比如数据获取、订阅或手动修改 DOM。它在每次渲染后执行。</p><h3>自定义 Hooks</h3><p>我们可以创建自定义 Hooks 来复用状态逻辑，让代码更加清晰和可维护。</p>',
    category: 'React',
    date: '2024-01-15',
  },
  {
    id: '2',
    title: 'TypeScript 基础入门',
    excerpt: 'TypeScript 是 JavaScript 的超集，添加了类型系统。本文带你快速入门 TypeScript。',
    content: '<p>TypeScript 为 JavaScript 添加了静态类型检查，帮助我们在开发过程中发现错误。</p><h3>基本类型</h3><p>TypeScript 支持多种基本类型：string、number、boolean、array、tuple、enum 等。</p><h3>接口</h3><p>接口用于定义对象的形状，确保对象符合特定的结构。</p><h3>泛型</h3><p>泛型允许我们编写可重用的组件，同时保持类型安全。</p>',
    category: 'TypeScript',
    date: '2024-01-10',
  },
  {
    id: '3',
    title: 'Tailwind CSS 实用技巧',
    excerpt: 'Tailwind CSS 是一个实用优先的 CSS 框架。本文分享一些实用的使用技巧。',
    content: '<p>Tailwind CSS 通过类名来快速构建界面，无需编写自定义 CSS。</p><h3>响应式设计</h3><p>Tailwind 提供了响应式断点，如 sm、md、lg、xl，可以轻松实现响应式布局。</p><h3>自定义主题</h3><p>通过 tailwind.config.js 可以自定义颜色、字体、间距等设计系统。</p><h3>组合类名</h3><p>使用 clsx 或 tailwind-merge 可以更方便地组合类名。</p>',
    category: 'CSS',
    date: '2024-01-05',
  },
  {
    id: '4',
    title: 'Vite 构建工具入门',
    excerpt: 'Vite 是一个新一代前端构建工具，速度非常快。本文介绍如何使用 Vite 创建项目。',
    content: '<p>Vite 利用浏览器原生 ES Module 特性，实现了极速的开发服务器启动时间。</p><h3>创建项目</h3><p>使用 npm create vite@6.5.0 . -- --template react-ts 即可快速创建项目。</p><h3>插件系统</h3><p>Vite 支持丰富的插件生态，可以轻松扩展功能。</p><h3>构建优化</h3><p>Vite 内置了代码分割、tree-shaking 等优化功能。</p>',
    category: '工具',
    date: '2024-01-01',
  },
]