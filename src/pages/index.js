import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Sidebar from '../components/Sidebar'
import FirstSection from '../components/FirstSection'
import Contact from '../components/Contact'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <FirstSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
