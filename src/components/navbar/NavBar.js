import "./navbar.css"
import React from 'react'


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
      <Link className="navbar" to="/technology">Technology</Link>  </li>

      <li className="navlist">
      <Link className="navbar" to="/food">Food</Link>  </li>

      <li className="navlist">
      <Link className="navbar"  to="/nature">Nature</Link>  </li>

      <li className="navlist">
      <Link className="mobnavbar"  to="/fitness">Fitness</Link>  </li>

    </ul>
  )
}

export default NavBar;
