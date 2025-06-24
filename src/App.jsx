import './App.css'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import IntroSection from './Components/IntroSection'
import Navbar from './Components/Navbar'
import ProjectSection from './Components/ProjectSection'
import SkillsSection from './Components/SkillsSection'

function App() {
  
  return (
    <div className='bg-offWhite'>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <SkillsSection />
      <ProjectSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  )
}

export default App
