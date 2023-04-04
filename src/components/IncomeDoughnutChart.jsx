import React,{useContext} from 'react';
import {Chart as ChartJS, ArcElement,Tooltip,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import { ExpenseTrackerContext } from '../context/context';

ChartJS.register(ArcElement,Tooltip,Legend)
const IncomeDoughnutChart = () => {

    const {transactions}=useContext(ExpenseTrackerContext)
    
    const amountData=[];
    const categoryData=[];
    const colorPalette=['#A3CEEF0','#BBD2EC','#C5D4EB','#7BB4E3','#009DCF','#00609C','#DFE9FS','#6C85BD','#004F92','#006DB2','#4E97D1']

   

    
    const options={};

    const incomeTransactions=[...transactions]

    incomeTransactions.map((item)=>{

        if(item.type==="Income"){
            amountData.push(item.amount);
        
        categoryData.push(item.category)
        }
        
    })
    console.log(categoryData)

     const data={
        labels:categoryData,
        datasets:[{
            label:'Income',
            data:amountData,
            backgroundColor:colorPalette,
            
        }]

    
    }


  return (
    <>
        <h1>
            Total:{amountData.reduce((prev,cur)=>prev+cur,0)}
        </h1> 
        <div>
            <Doughnut data={data} options={options} ></Doughnut>
        </div>
    </>
    
  )
}

export default IncomeDoughnutChart