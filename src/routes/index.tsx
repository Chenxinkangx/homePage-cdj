import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:id',
    element: <BlogDetail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])