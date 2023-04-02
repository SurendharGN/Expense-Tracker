import React from 'react'
import {Doughnut} from "react-chartjs-2";

const Card = ({title}) => {
    
  return (
    <div className={` ${title==="Income"?"bg-green-400":"bg-red-400"}`}>
        <h1>{title}</h1>
    </div>
  )
}

export default Card