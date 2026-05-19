import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Life from './components/Life'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Hero />
      <About />
      <Projects />
      <Life />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
