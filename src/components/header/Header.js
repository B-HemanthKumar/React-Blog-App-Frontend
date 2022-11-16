import "./header.css"
import React from 'react'

const Header = () => {
  return (
    <>
    <div className="header" >
     
       <div className="text">
          <p className="blogtitle">THE DELL THAT INSPIRES</p>
          <p className="blogcatdate">Technology / 20 oct 2022</p>
        </div>
      
        <div className="header1">
          <img className="img1" src='assests/dell.jpg' alt=""></img>
        </div>

        <div className="header2">
          <div className="text1">
            <p className="blogtitle1">THE DELL THAT INSPIRES</p>
            <p className="blogcatdate1">Technology / 20 oct 2022</p>
          </div>

          <img className="img2" src='assests/dell.jpg' alt=""></img>
          <img className="img3" src='assests/dell.jpg' alt=""></img>
          
          <div className="text2">
            <p className="blogtitle2">THE DELL THAT INSPIRES</p>
            <p className="blogcatdate2">Technology / 20 oct 2022</p>
          </div> 
        </div>
      </div>
    
    </>
  )
}

export default Header;