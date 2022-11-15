import "./topPost2.css"
import React from 'react'

const TopPost2 = () => {
  return (
    <div>
    <div className="topPost2">
      <img className="cardio" src="assests/cardio.jpg" alt="" />
              
      <div className="cardioinfo">
        <p className="cardiodes">
          Treadmill is a form of cardio
          which is used to burn calories 
          and maintain cardiovascular health
        </p>
              
        <div className="cardiocatdate">
          <p className="cardiocat"> Fitness</p>
          <p className="cardiodate">/ 29 oct 2022</p> 
        </div>
      </div>
    </div>  
    <hr></hr>
  </div> 
  )
}

export default TopPost2;