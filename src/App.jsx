import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from './Navbar/Navbar'
import Festival from "./Navbar/Festival Tours/Festival"
import Blog from "./Navbar/Blogs/Blog"
import Home from './Navbar/Home/Home'
import Packages from './Navbar/Packages/Packages'
import About from './Navbar/about/About'
import PackageDetails from "./Navbar/Packages/PackageDetails"
import International from './Navbar/Packages/Internationl/International'
import InternationalDetail from './Navbar/Packages/Internationl/InternationalDetail'
import Himachal from './Navbar/Destination/Himachal Pradesh/Himachal'

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/packageget/:id' element={<PackageDetails/>}/>
          <Route path='/packages/international' element={<International/>} />
          <Route path='/packages/internationalget/:id' element={<InternationalDetail/>}/>
          <Route path='/himachal' element={<Himachal/>} />
          <Route path='/festival' element={<Festival />}/>
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App