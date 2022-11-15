import "./navbar.css"
import React from 'react'


const NavBar = () => {
  return (
    <ul className="navbar">

      <li className="navlist">
      <a className="a" href="/">Home</a> </li>

      <li className="navlist">
      <a className="a" href="/bollywood">Bollywood</a> </li>

      <li className="navlist">
      <a  className="a" href="/technology">Technology</a> </li>

      <li className="navlist">
      <a className="a" href="/hollywood">Hollywood</a> </li>

      <li className="navlist">
      <a className="a" href="/fitness">Fitness</a> </li>

      <li className="navlist">
      <a className="a" href="/food">Food</a> </li>

      <li className="navlist">
      <a className="a" href="/nature">nature</a> </li>  

    </ul>
//  <div className="navbar">
//         <ul className="list">
//             <li className="listitem">Home</li>
//             <li className="listitem">Bollywood</li>
//             <li className="listitem">Technology</li>
//             <li className="listitem">Hollywood</li>
//             <li className="listitem">Fitness</li>
//             <li className="listitem">Food</li>
//             <li className="listitem">Nature</li>
//         </ul> 
//     </div>
  )
}

export default NavBar;
