import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import { FaLongArrowAltUp } from 'react-icons/fa'

function Navbar() {
    return (
        <>
            <nav class="navbar">
                <a class="navbar-logo"> <img className="img-logo" src={logo} alt="" /></a>
                <div class="navbar-menu">
                    <a class="active"> <Link to="/"> Home </Link></a>
                    <a  > <Link to="/packages"> Packages </Link></a>
                    <a  > <Link to="/destination"> Destination </Link></a>
                    <a  > <Link to="/festival"> Festival </Link></a>
                    <a > <Link to="/blog"> Blog </Link></a>
                    <a > <Link to="/about"> About</Link></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar