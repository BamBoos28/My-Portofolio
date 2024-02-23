import './App.css'

import { Route, Routes } from 'react-router-dom'

import Home from "./page/homePage"
import AboutMe from './page/aboutMe'
import Skill from './page/skill'
import Projext from './page/projext'
import Work from './page/work'
import Contact from './page/contact'

import { useMediaQuery } from 'react-responsive'

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe navbar={isMobile ? "visible" : "hidden"} sidebar={!isMobile ? "visible" : "hidden"} />} />
        <Route path="/skill" element={<Skill navbar={isMobile ? "visible" : "hidden"} sidebar={!isMobile ? "visible" : "hidden"}/>} />
        <Route path="/project" element={<Projext navbar={isMobile ? "visible" : "hidden"} sidebar={!isMobile ? "visible" : "hidden"}/>} />
        <Route path="/experience" element={<Work navbar={isMobile ? "visible" : "hidden"} sidebar={!isMobile ? "visible" : "hidden"}/>} />
        <Route path="/contact" element={<Contact navbar={isMobile ? "visible" : "hidden"} sidebar={!isMobile ? "visible" : "hidden"}/>} />
      </Routes> 
    </>
  )
}

export default App
