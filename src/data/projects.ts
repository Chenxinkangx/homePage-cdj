export const projectsData = [
  {
    title: '个人主页',
    description: '使用 React + TypeScript + TailwindCSS 构建的响应式个人网站，展示项目和个人信息。',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    details: '这是我的第一个React项目，从零开始搭建了一个完整的个人作品集网站。项目包含了响应式设计、主题切换、滚动动画等功能。通过这个项目，我学习了React的基本概念、组件化开发和状态管理。',
    features: ['响应式布局', '深色/浅色主题', '滚动动画', '平滑导航'],
  },
  {
    title: '校园AI二手交易平台',
    description: 'Spring Boot + Vue 3 全栈校园二手交易平台，集成AI智能搜索、WebSocket实时聊天。',
    tags: ['Spring Boot', 'Vue 3', 'AI', 'WebSocket'],
    details: '一个完整的校园二手交易平台，采用前后端分离架构。后端使用Spring Boot 3 + MyBatis Plus + Redis，集成Spring AI实现自然语言搜索；前端使用Vue 3 + TypeScript + Pinia，包含用户端和管理后台两套界面。支持JWT认证、WebSocket实时聊天、商品发布与管理、学生认证等功能。',
    features: ['AI智能搜索', 'WebSocket实时聊天', '学生认证系统', '管理后台'],
  },
  {
    title: 'RAG 智能助手系统',
    description: '基于 RAG 架构的智能助手，支持对话管理、知识库检索、任务规划与执行。',
    tags: ['FastAPI', 'Vue 3', 'RAG', 'Ollama'],
    details: '采用 RAG 架构的智能助手系统，后端基于 FastAPI + SQLAlchemy + ChromaDB，实现 BM25 与向量检索的混合检索；前端使用 Vue 3 + TypeScript + Pinia。支持文档上传解析（PDF/DOCX/TXT）、智能分块索引、流式响应、复杂任务自动拆解与执行。所有 LLM 调用基于 Ollama 本地部署。',
    features: ['混合检索(BM25+向量)', '文档知识库', '任务规划执行', '流式响应'],
  },
]
