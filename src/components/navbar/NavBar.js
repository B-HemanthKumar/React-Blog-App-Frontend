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
      <a className="a" href="/nature">Nature</a> </li>  

    </ul>
  )
}

export default NavBar;
