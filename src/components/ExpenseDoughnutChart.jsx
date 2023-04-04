import React,{useContext} from 'react';
import {Chart as ChartJS, ArcElement,Tooltip,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import { ExpenseTrackerContext } from '../context/context';

ChartJS.register(ArcElement,Tooltip,Legend)
const ExpenseDoughnutChart = () => {

    const {transactions}=useContext(ExpenseTrackerContext)
    
    const expenseAmountData=[];
    const expensecategoryData=[];
    const colorPalette=['#A3CEEF0','#BBD2EC','#C5D4EB','#7BB4E3','#009DCF','#00609C','#DFE9FS','#6C85BD','#004F92','#006DB2','#4E97D1']

    const data={
        labels:expensecategoryData,
        datasets:[{
            label:'Expense',
            data:expenseAmountData,
            backgroundColor:colorPalette,
            
        }]

    
    }

    const expenseTransactions=[...transactions]
    expenseTransactions.map((item)=>{
        if(item.type==="Expense"){
            expenseAmountData.push(item.amount);
        
        expensecategoryData.push(item.category)
        }
        
    })

    const options={}
  return (
    <>
        <h1>
            <h1>
            Total:{expenseAmountData.reduce((prev,cur)=>prev+cur,0)}
        </h1>
        </h1>
        <div>
            <Doughnut data={data} options={options} ></Doughnut>
        </div>
    </>
    
  )
}

export default ExpenseDoughnutChart