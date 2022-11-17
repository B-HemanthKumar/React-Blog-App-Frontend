import "./mobnavbar.css"
import React from 'react'
import { Link } from "react-router-dom"

const MobNavBar = () => {
  return (
    <ul className="mobnavbar">

    
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


    </ul> 
    
  )
}

export default MobNavBar;