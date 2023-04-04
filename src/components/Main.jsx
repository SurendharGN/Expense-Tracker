import React from 'react';
import Calendar from 'react-calendar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState,useContext } from 'react';
import 'react-calendar/dist/Calendar.css';
import RollingList from './RollingList';
import { ExpenseTrackerContext } from '../context/context';
import {v4 } from 'uuid';
import IncomeDoughnutChart from './IncomeDoughnutChart';
import ExpenseDoughnutChart from './ExpenseDoughnutChart';
import HistoryIcon from '@mui/icons-material/History';
import AccessTimeIcon from '@mui/icons-material/AccessTime';



const initialState={
    amount:"",
    category:'',
    type:'Income',
    date: new Date()
}
const Main = () => {

    const [open,setOpen]=useState(false);
    const [data,setData]=useState(initialState)
    const balance=100;

    const {addTransaction}=useContext(ExpenseTrackerContext);

    const createTransaction=()=>{
        const transaction={...data, amount:Number(data.amount), id:v4()};
        addTransaction(transaction);
        setData(initialState)
    }

    console.log(data)
  return (
    <div>
        
        <div className='flex justify-between bg-black h-20  items-center w-3/4 m-auto'>
            <h1 className="text-4xl font-thin font-raleway text-white ml-6"> Balance: {balance}</h1>
            <div className='flex text-white'>
                <HistoryIcon/>
                <p className='text-2xl font-raleway font-thin mr-6'>View history</p>
            </div>
        </div>
        
        <div  className="w-3/4 border border-black m-auto mt-12">
            <div className='my-6'>
                <ul className="grid grid-cols-2 grid-rows-4">
                <li className='col-span-2'>
                    <div className="w-48 cursor-pointer flex justify-between relative" onClick={()=>setOpen((prev)=>!prev)}>
                        <span>Type</span>
                        <ArrowDropDownIcon/>
                        {open && <div><ul>
                    <li>
                        <button onClick={()=>setData({...data, type:'Income'})} className="bg-green-200">Income</button>
                    </li>
                    <li>
                        <button onClick={()=>setData({...data, type: 'Expense'})}className="bg-red-300">
                            Expense
                        </button>
                    </li>
                </ul></div>}
                    </div>
                </li>

                
                <li className='border border-black h-16 w-64'>
                    <input value={data.category} onChange={(e)=>setData({...data, category: e.target.value})}placeholder='Category'/>
                </li>

                <li className='border h-16 w-64 border-black row-start-3 row-end-4 '>
                    <input value={data.category} onChange={(e)=>setData({...data, category: e.target.value})}placeholder='Description'/>
                </li>

                <li className='border h-16 w-64 border-black row-start-4 row-end-5'>
                    <input value={data.amount} onChange={(e)=>setData({...data, amount: e.target.value})} placeholder='Enter amount'/>
                </li>

                <li className=' col-span-1 row-span-2'>
                    <div className=''>
                    <Calendar className='' value={data.date} onChange={(e)=>setData({...data, date: e})}  />
                </div>
                </li>
                <li className='row-start-4 h-16 w-64 col-start-2 bg-black text-white'>
                    <button type="submit" onClick={createTransaction} >CREATE</button>
                </li>
                
            </ul>
            </div>
            
            
            
           
{/* 
            <div className='flex justify-center mb-10 overflow-y-scroll h-40'>
                <RollingList />
            </div>

            <div className='flex justify-between '>
                <div id="income" className=" bg-zinc-100 mt-5 h-96  flex-1">
                   <IncomeDoughnutChart/>
                </div>

                <div id="expense" className="bg-zinc-100 mt-5 border-l border-l-black flex-1">
                    <ExpenseDoughnutChart/>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Main

