import LatestPost from "./LatestPost"
import "./latest.css"
import React from 'react'
// import { Link } from "react-router-dom"

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
