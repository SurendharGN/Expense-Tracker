import React from 'react'
import IncomeDoughnutChart from './IncomeDoughnutChart'

const Card = ({title}) => {
    
    
  return (
    <>
        <div className={`${title==="Income"?"bg-green-400":"bg-red-400"}`}>
        <h1>{title}</h1>
        <IncomeDoughnutChart/>

        </div>
        <div>

        </div>
    </>
    
  )
}

export default Card