import LatestPost from "./LatestPost"
import "./latest.css"
import React from 'react'
import { Link } from "react-router-dom"

const Latest = () => {
  return (
    <div className="latest">
      < Link to="/SinglePost"> <LatestPost /> </Link>
      < Link to="/SinglePost"> <LatestPost /> </Link>
      < Link to="/SinglePost"> <LatestPost /> </Link>
    </div>
  )
}

export default Latest;
