import './App.css'

import { Route, Routes } from 'react-router-dom'

import Home from "./page/homePage"
import AboutMe from './page/aboutMe'
import Skill from './page/skill'
import Projext from './page/projext'
import Work from './page/work'
import Contact from './page/contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Projext />} />
        <Route path="/experience" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
