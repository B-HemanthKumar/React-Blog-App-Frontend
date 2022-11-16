import "./toppost1.css"
import TopPost2 from "./TopPost2"
import React from 'react'


const TopPost1 = () => {
  return (
   
    <div className="toppost1"> 
       
      <div className="tp1title">Top Posts</div>
      <div className="tp1hr">_______</div> 
      <img className="seafood" src="assests/food1.jpg" alt="" />
          
      <div className="foodinfo">
        <p className="fooddes">
        Professional cook,prepares shrimps
        with sprigg beans.Frost in the air,
        healthy vegetarian food</p>
                
        <div className="foodcatdate">
          <p className="foodcat"> Food</p>
          <p className="fooddate">/ 29 oct 2022</p> 
        </div>
        <hr></hr>
      </div>

      < TopPost2 /> 
      < TopPost2 /> 
      < TopPost2 />
      
    </div>
  )
}

export default TopPost1;