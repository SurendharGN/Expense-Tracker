import React,{useContext} from 'react';
import {Chart as ChartJS, ArcElement,Tooltip,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import { ExpenseTrackerContext } from '../context/context';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';

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
        <div className='flex justify-between text-center h-24  items-center bg-black font-raleway text-thon text-5xl font-thin m-auto md:mt-10 text-white py-3 mb-10 md:w-3/5 '>
            <h1 className='md:ml-10 xs:text-xl '>
            Total : {expenseAmountData.reduce((prev,cur)=>prev+cur,0)}
            </h1> 
            <div className='flex'>
                <div className='flex text-white gap-2 justify-center items-center hover:scale-x-110 hover:scale-y-110 transition ease-in-out duration-300'>
                <HistoryIcon/>
                <Link to='/History' className='md:text-2xl font-raleway font-thin mr-6 xs:text-lg'>View history</Link>
            </div>
                <div className='flex justify-center items-center gap-1 mr-5 transition duration-300 ease-in-out hover:scale-x-110 hover:scale-y-110'>
                    <HomeIcon/>
                     <Link to='/' className='md:text-2xl font-raleway font-thin mr-6 xs:text-lg'>Home</Link>
                </div>
            </div>
            
        </div>
        
        <div className='md:h-96 md:w-96 xs:h-64 xs:w-64 m-auto'>
            <Doughnut data={data} options={options} ></Doughnut>
        </div>
        <div className='flex md:flex-row relaive justify-between w-3/5 items-center m-auto mt-5 xs:flex-col xs:gap-5 '>

            <div className='flex align-middle'>
                 <Link to='/Income'  className='bg-black text-white md:w-1/2 md:h-16 font-raleway font-thin text-2xl transition duration-300 ease-in-out hover:scale-x-110 hover:scale-y-110 hover:bg-white hover:text-black hover:border hover:border-black align-middle justify-center flex text-center pt-4 xs:w-80 xs:h-12 xs:mx-16  ' >
                    View Income
                </Link>
            </div>
            <div className='flex items-center align-middle'>
                 <Link to='/Expense' className='bg-black text-white md:w-1/2 md:ml-5 md:h-16 font-raleway font-thin text-2xl transition duration-300 ease-in-out hover:scale-x-110 hover:scale-y-110 hover:bg-white hover:text-black hover:border hover:border-black justify-center flex text-center pt-4 xs:w-80 xs:h-12 '>
                    View Expense
                </Link>
            </div>
        </div>
    </>
    
  )
}

export default ExpenseDoughnutChart