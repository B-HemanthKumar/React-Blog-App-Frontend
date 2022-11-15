import LatestPost from "./LatestPost"
import "./latest.css"
import React from 'react'

const Latest = () => {
  return (
    <div className="latest">
         <LatestPost />
         <LatestPost />
         <LatestPost />
    </div>
  )
}

export default Latest;
