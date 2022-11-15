import "./bollywood.css"
import Articles from "../../posts/articles/Articles"
import TopPost1 from "../../posts/toppost/TopPost1"
import Title from "../../title/Title"
import NavBar from "../../navbar/NavBar"
import React from 'react'

const Bollywood = () => {
  return (
   <>
   <Title />
   <NavBar />
    
    <div className="bollywood">
       <p className="btitle">Bollywood</p>
       <p className="bhr">_______</p>
   </div>
   
   <div className="bollywood1">
       <div className='barticles'>
          
          < Articles />
          < Articles />
          < Articles />
          < Articles />
          < Articles />
          < Articles />
          < Articles /> 
       </div>

       <div className="btoppost1">
          < TopPost1 />
       </div>
      
    </div>
 
    <div className="bsidebar">
       <p className="badd">Adversitment</p>
    </div>

    <div className="arrowload1">
    < img className="bottom_arrow1" src="assests/bottom_arrow.svg" alt="" />
    <p className="loadmore1">LOAD MORE</p> 
    </div>
 
 </>
  )
}

export default Bollywood;