import Navbar from "./components/layout/Navbar"

import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"
import Skills from "./sections/Skills/Skills"
import Projects from "./sections/Projects/Projects"
import CaseStudy from "./sections/CaseStudy/CaseStudy"
import Experience from "./sections/Experience/Experience"
import Contact from "./sections/Contact/Contact"


import Footer from "./components/layout/Footer"
import AnalyticsConsent from "./components/common/AnalyticsConsent"



function App() {

  return (

    <>

      <Navbar />


      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <CaseStudy />

        <Experience />

        <Contact />
        
        
      </main>


      <Footer />
      <AnalyticsConsent />

    </>

  )

}


export default App
