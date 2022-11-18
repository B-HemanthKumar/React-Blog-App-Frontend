import "./mobnavbar.css"
import React from 'react'
import { Link } from "react-router-dom"

const MobNavBar = () => {
  return (
    <ul className="mobnavbar">

    <li className="mobnavlist">
       <Link className="a1" to="/">Home</Link> </li>

      <li className="mobnavlist">
      <Link className="a1" to="/bollywood">Bollywood</Link>  </li>

      <li className="mobnavlist">
      <Link className="a1" to="/hollywood">Hollywood</Link>  </li>
      
      <li className="mobnavlist">
      <Link className="a1" to="/technology">Technology</Link>  </li>

      <li className="mobnavlist">
      <Link className="a1" to="/food">Food</Link>  </li>

      <li className="mobnavlist">
      <Link className="a1"  to="/nature">Nature</Link>  </li>

      <li className="mobnavlist">
      <Link className="a1"  to="/fitness">Fitness</Link>  </li>


    </ul> 
    
  )
}

export default MobNavBar;