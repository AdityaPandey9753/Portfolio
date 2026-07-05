import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Achievements from './Components/Achievements'
import Contact from './Components/Contact'
//import Chatbot from './Components/Chatbot'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className="font-body bg-white">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      {/* <Chatbot /> */}
    </div>
  )
}