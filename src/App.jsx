import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from './Navbar/Navbar'
import Festival from "./Navbar/Festival Tours/Festival"
import Blog from "./Navbar/Blogs/Blog"
import Home from './Navbar/Home/Home'
import Packages from './Navbar/Packages/Packages'
import Destination from "./Navbar/Destination/Destination"
import About from './Navbar/about/About'
import PackageDetails from "./Navbar/Packages/PackageDetails"

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/destination' element={<Destination/>} />
          <Route path='/festival' element={<Festival />}/>
          <Route path='/packageget/:id' element={<PackageDetails/>}/>
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App