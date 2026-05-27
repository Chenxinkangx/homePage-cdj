import { useEffect } from 'react'
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactLenis } from 'lenis/react'
import { Navbar } from '../components/Navbar'
import App from '../App'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import NotFound from '../pages/NotFound'
import ScrollProgress from '../components/ScrollProgress'
import { FloatingOrbs } from '../components/FloatingOrbs'
import { NoiseOverlay } from '../components/NoiseOverlay'
import { CustomCursor } from '../components/CustomCursor'

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      }}
    >
      <ScrollProgress />
      <FloatingOrbs />
      <Navbar />
      <CustomCursor />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <NoiseOverlay />
    </ReactLenis>
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
