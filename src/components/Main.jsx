import React from 'react';
import Calendar from 'react-calendar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState,useContext } from 'react';
import 'react-calendar/dist/Calendar.css';
import RollingList from './RollingList';
import Card from './Card';
import { ExpenseTrackerContext } from '../context/context';
import {v4 } from 'uuid';
import IncomeDoughnutChart from './IncomeDoughnutChart';
import ExpenseDoughnutChart from './ExpenseDoughnutChart';



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
        
        <div>
            <h1 className="text-3xl  font-raleway ">Expense Tracker</h1>
            <h2 className="text-xl font-raleway">Total Balance: {balance}</h2>
        </div>
        <hr></hr>
        <div >
            <div className='my-6'>
                <ul className="flex gap-10 justify-center">
                <li>
                    <div className="w-48 cursor-pointer flex justify-between relative" onClick={()=>setOpen((prev)=>!prev)}>
                        <span >Type</span>
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
                <li>
                    <input value={data.category} onChange={(e)=>setData({...data, category: e.target.value})}placeholder='Category'/>
                </li>
            </ul>
            </div>
            
            <div className='flex justify-center '>
                <input value={data.amount} onChange={(e)=>setData({...data, amount: e.target.value})} placeholder='Enter amount'/>
                <div className='mb-8'>
                    <Calendar className='' value={data.date} onChange={(e)=>setData({...data, date: e})}  />
                </div>
            </div>
            
            <button type="submit" onClick={createTransaction} className="border w-1/2">CREATE</button>

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
            </div>
            

            


            

        </div>
    </div>
  )
}

export default Main

