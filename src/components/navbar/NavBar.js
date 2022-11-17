import "./navbar.css"
import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <ul className="navbar">

      <li className="navlist">
       <Link className="navbar" to="/">Home</Link> </li>

      <li className="navlist">
      <Link className="navbar" to="/bollywood">bollywood</Link>  </li>

      <li className="navlist">
      <Link className="navbar" to="/hollywood">hollywood</Link>  </li>

      <li className="navlist">
      <Link className="navbar" to="/">Home</Link>  </li>

      <li className="navlist">
      <Link className="navbar"  to="/">Home</Link>  </li>

      <li className="navlist">
      <Link className="navbar"  to="/">Home</Link>  </li>

      <li className="navlist">
      <a className="a" href="/nature">Nature</a> </li>  

    </ul>
  )
}

export default NavBar;
