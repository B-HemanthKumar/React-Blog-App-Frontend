import "./mobnavbar.css"
import React from 'react'
import { Link } from "react-router-dom"

const MobNavBar = () => {
  return (
    <ul className="mobnavbar">

    
<li className="navlist">
       <Link className="mobnavbar" to="/">Home</Link> </li>

      <li className="navlist">
      <Link className="mobnavbar" to="/bollywood">bollywood</Link>  </li>

      <li className="navlist">
      <Link className="mobnavbar" to="/hollywood">hollywood</Link>  </li>
      
      <li className="navlist">
      <Link className="mobnavbar" to="/technology">Technology</Link>  </li>

      <li className="navlist">
      <Link className="mobnavbar" to="/food">Food</Link>  </li>

      <li className="navlist">
      <Link className="mobnavbar"  to="/nature">Nature</Link>  </li>

      <li className="navlist">
      <Link className="mobnavbar"  to="/fitness">Fitness</Link>  </li>


    </ul> 
    
  )
}

export default MobNavBar;