import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import BlogPreview from './components/BlogPreview'
import Life from './components/Life'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // 使用主题 Hook
  const { theme, toggleTheme } = useTheme()

  return (
    <main className="min-h-screen">
      {/* 将主题状态和切换函数传递给 Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BlogPreview />
      <Life />
      <Contact />
      <Footer />
    </main>
  )
}

export default App