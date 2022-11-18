import "./navbar.css"
import React from 'react'
import { Link } from "react-router-dom"


const NavBar = () => {
  return (

    <ul className="navbar" >
<li className="navlist">
       <Link className="a" to="/">Home</Link> </li>

      <li className="navlist">
      <Link className="a"  to="/bollywood">Bollywood</Link>  </li>

      <li className="navlist">
      <Link className="a" to="/hollywood">Hollywood</Link>  </li>
      
      <li className="navlist">
      <Link className="a"  to="/technology">Technology</Link>  </li>

      <li className="navlist">
      <Link  className="a" to="/food">Food</Link>  </li>

      <li className="navlist">
      <Link  className="a" to="/nature">Nature</Link>  </li>

      <li className="navlist">
      <Link className="a" to="/fitness">Fitness</Link>  </li>

    </ul>
 
  )
}

export default NavBar;
