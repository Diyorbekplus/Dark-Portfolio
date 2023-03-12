import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "../Style/css/Navbar.css"
import logo from "../Images/logo.png"
const Navbar = () => {
  const [visable, setVisable] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar_brand">
          <img src={logo} alt="logo" />
          <span className='brand'>Diyuller</span>
        </div>
        <button className='navbar-toggler' onClick={() => setVisable(true)}><span className="navbar-toggler-icon"></span></button>
        <ul className='navbar_nav'>
          <li className='nav_item'><a href="#home" className='nav_link'>Home</a></li>
          <li className='nav_item'><a href="#features" className='nav_link'>Features</a></li>
          <li className='nav_item'><a href="#skills" className='nav_link'>Skills</a></li>
          <li className='nav_item'><a href="#portfolio" className='nav_link'>Portfolio</a></li>
          <li className='nav_item'><a href="#contact" className='nav_link'>Contact</a></li>
        </ul>
        {
          visable ?
          (<ul className='navbar_nav-small bg-dark'>
            <button className='navbar-toggler btn-close' onClick={() => setVisable(false)}></button>
          <li className='nav_item' onClick={() => setVisable(false)}><a href="#home" className='nav_link'>Home</a></li>
          <li className='nav_item' onClick={() => setVisable(false)}><a href="#features" className='nav_link'>Features</a></li>
          <li className='nav_item' onClick={() => setVisable(false)}><a href="#skills" className='nav_link'>Skills</a></li>
          <li className='nav_item' onClick={() => setVisable(false)}><a href="#portfolio" className='nav_link'>Portfolio</a></li>
          <li className='nav_item' onClick={() => setVisable(false)}><a href="#contact" className='nav_link'>Contact</a></li>
        </ul> )
        :
        ""
        }
    </nav>
  )
}

export default Navbar