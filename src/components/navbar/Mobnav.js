import React from 'react'
import "./mobnav.css"
import { useState } from 'react'
import MobNavBar from './MobNavBar';


const Mobnav = () => {

const [open, setOpen] = useState(false);

  return (
    <div className='mobnav'>
     <img className="hamburger" src="./assests/hamburger.png" alt="" 
        onClick={ () =>
        setOpen (!open)}
      />
      {open && < MobNavBar />}
    
    </div>
  )
}

export default Mobnav;