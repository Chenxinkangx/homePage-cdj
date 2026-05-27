import { useEffect } from 'react'
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import App from '../App'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import NotFound from '../pages/NotFound'

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:id', element: <BlogDetail /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
