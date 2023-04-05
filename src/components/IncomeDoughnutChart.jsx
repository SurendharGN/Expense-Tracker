import React,{useContext} from 'react';
import {Chart as ChartJS, ArcElement,Tooltip,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import { ExpenseTrackerContext } from '../context/context';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';


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
        <div className='flex justify-between text-center h-24  items-center bg-black font-raleway text-thon text-5xl font-thin m-auto mt-10 text-white py-3 mb-10 w-3/5 '>
            <h1 className='ml-10'>
            Total : {amountData.reduce((prev,cur)=>prev+cur,0)}
            </h1>

            <div className='flex'>

                <div className='flex text-white gap-2 justify-center items-center hover:scale-x-110 hover:scale-y-110 transition ease-in-out duration-300'>
                <HistoryIcon/>
                <Link to='/History' className='text-2xl font-raleway font-thin mr-6'>View history</Link>
            </div>
                <div className='flex justify-center items-center gap-1 mr-5 transition duration-300 ease-in-out hover:scale-x-110 hover:scale-y-110'>
                    <HomeIcon/>
                     <Link to='/' className='text-2xl font-raleway font-thin mr-6'>Home</Link>
                </div>

                
            </div>
            
        </div>
        
        <div className='h-96 w-96 m-auto'>
            <Doughnut data={data} options={options} ></Doughnut>
        </div>
        <div className='flex relaive justify-between w-3/5 items-center m-auto mt-16'>
                <Link to='/Income'  className=' w-1/2 ml-5 flex items-center justify-center h-16 font-raleway font-thin text-2xl transition duration-300 ease-in-out  bg-white text-black border border-black ' >
                    View Income
                </Link>
                <Link to='/Expense' className='bg-black text-white w-1/2  h-16 font-raleway font-thin text-2xl transition duration-300 ease-in-out hover:scale-x-105 hover:scale-y-110 hover:bg-white hover:text-black hover:border hover:border-black align-middle justify-center flex text-center pt-4  '>
                    View Expense
                </Link>
            </div>
    </>
    
  )
}

export default IncomeDoughnutChart

