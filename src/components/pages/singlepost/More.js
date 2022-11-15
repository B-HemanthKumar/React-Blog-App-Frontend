import './more.css'
import React from 'react';

const More = () => {
  return (
    <>
      <div className='more1'>
        <p className='rr'>Related reads</p>
        <img className="moreimg" src='./assests/1.jpg' alt='' />
        <p className='imgtitle' > Fitness Equipments </p>
        <p className="aname1">B.Hemanth Kumar</p>
        
        <div className="adetails2">
          <img src="./assests/alogo.png" alt="" />
                
          <div className="ainfo">
            <p className="aname">B.Hemanth Kumar</p>
            <p className="spd">nov 03 2022 / 10 min ago</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default More;
