export const projectsData = [
  {
    title: '个人主页',
    description: '使用 React + TypeScript + TailwindCSS 构建的响应式个人网站，展示项目和个人信息。',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    details: '从零搭建的完整作品集网站，采用 Framer Motion 实现滚动动画与页面过渡，TailwindCSS v4 定制深色/浅色主题。通过 CSS 变量实现全站主题切换，所有组件均为手工构建，未使用 UI 组件库。',
    features: ['响应式布局与多端适配', '深色/浅色主题系统', 'Framer Motion 滚动动画', 'CSS 变量主题化设计'],
  },
  {
    title: '校园AI二手交易平台',
    description: 'Spring Boot + Vue 3 全栈校园二手交易平台，集成AI智能搜索、WebSocket实时聊天。',
    tags: ['Spring Boot', 'Vue 3', 'AI', 'WebSocket'],
    details: '完整的校园二手交易平台，前后端分离架构。后端使用 Spring Boot 3 + MyBatis Plus + Redis，集成 Spring AI 实现自然语言搜索；前端使用 Vue 3 + TypeScript + Pinia，包含用户端和管理后台两套界面。支持 JWT 认证、WebSocket 实时消息推送、商品发布与管理、学生实名认证等核心交易流程。',
    features: ['Spring AI 自然语言搜索', 'WebSocket 实时聊天', 'JWT 身份认证', '用户端与管理后台双界面'],
  },
  {
    title: 'RAG 智能助手系统',
    description: '基于 RAG 架构的智能助手，支持对话管理、知识库检索、任务规划与执行。',
    tags: ['FastAPI', 'Vue 3', 'RAG', 'Ollama'],
    details: '采用 RAG 架构的智能助手，后端基于 FastAPI + SQLAlchemy + ChromaDB 向量数据库，实现 BM25 全文检索与向量语义检索的混合检索，并引入重排序优化结果相关性。前端使用 Vue 3 + TypeScript + Pinia。支持 PDF/DOCX/TXT 文档上传解析、智能分块索引、SSE 流式响应，以及复杂任务的自动拆解与分步执行。所有 LLM 调用基于 Ollama 本地部署，数据不外传。',
    features: ['BM25 + 向量混合检索', '文档知识库与自动索引', '任务规划与分步执行', 'Ollama 本地部署'],
  },
]
