import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import BlogPreview from './components/BlogPreview'
import Life from './components/Life'
import Contact from './components/Contact'
import Guestbook from './components/Guestbook'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BlogPreview />
      <Life />
      <Contact />
      <Guestbook />
      <Footer />
    </main>
  )
}

export default App
