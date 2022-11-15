import "./articles.css"
import React from 'react'

const Articles = () => {
  return (
    <> 
    <hr className="ahr"></hr>
    <div className="ii">
    <img className="bp1" src="assests/pathaan1.jpg" alt="" />
          
      <div className="bp1info">
        <p className="bp1title">Pathaan</p>
        <p className="bp1des">
          Here's what Shah Rukh Khan feels about comeback after 
          four years, working with Deepika Padukone again
        </p>
            
        <div className="bp1catdate">
          <p className="bp1cat"> Bollywood</p>
          <p className="bp1date">/ 29 oct 2022</p> 
        </div>
      </div>
    </div>
  </>
  )
}

export default Articles;
