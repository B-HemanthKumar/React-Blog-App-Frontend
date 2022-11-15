import "./latestpost.css";
import React from 'react'

const LatestPost = () => {
  return (
    <>
    <div className="latestpost">
      <img className="tobias" src="assests/tobias.jpg" alt="" />
      
      <div className="info">
        <p className="tobiastitle">Mount Tobias</p>
        <p className="des">Mount Tobias is a mountain located in the Catskill Mountains of New York southeast of Phoenicia. Ticetonyk Mountain is located south, Tremper Mountain is located northwest, Roundtop Mountain is located southeast, and Tonshi Mountain is located southeast of Mount Tobias</p>
        
        <div className="catdate">
          <p className="cat"> nature</p>
          <p className="date">/ 29 oct 2022</p> 
        </div>
      </div>
    </div>
    
  </>
  )
}

export default LatestPost;
