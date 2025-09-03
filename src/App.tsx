import { motion } from 'framer-motion'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import Achievements from './components/Achievements.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}

export default App
