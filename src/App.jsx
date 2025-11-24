import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from './Navbar/Navbar'
import Blog from "./Navbar/Blogs/Blog"
import Home from './Navbar/Home/Home'
import Packages from './Navbar/Packages/Packages'
import About from './Navbar/about/About'
import PackageDetails from "./Navbar/Packages/PackageDetails"
import International from './Navbar/Packages/Internationl/International'
import InternationalDetail from './Navbar/Packages/Internationl/InternationalDetail'
import Himachal from './Navbar/Destination/Himachal Pradesh/Himachal'
import Content6 from './Navbar/about/Content/Content6'

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/packages' element={<Packages />} /> */}
          {/* <Route path='/packageget/:id' element={<PackageDetails/>}/> */}
          {/* <Route path='/packages/international' element={<International/>} /> */}
          {/* <Route path='/packages/internationalget/:id' element={<InternationalDetail/>}/> */}
          {/* <Route path='/himachal' element={<Himachal/>} /> */}
          {/* <Route path='/blog' element={<Blog />} /> */}
          <Route path='/about' element={<About/>} />
          <Route path='/content' element={<Content6/>} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App