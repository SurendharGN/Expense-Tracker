import React from 'react';
import Calendar from 'react-calendar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState,useContext } from 'react';
import '../stlying/calendar.css';
import { ExpenseTrackerContext } from '../context/context';
import {v4 } from 'uuid';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from 'react-router-dom';





const initialState={
    balance:0,
    amount:"",
    category:'',
    description:'',
    type:'Income',
    date: new Date()
}
const Main = () => {

    const [open,setOpen]=useState(false);
    const [data,setData]=useState(initialState)
    const balance=100;
    const [showType,setShowType]=useState(true);
    const [buttonValue,setButtonValue]=useState('')

    const {addTransaction}=useContext(ExpenseTrackerContext);
    
    const createTransaction=()=>{
        const transaction={...data, amount:Number(data.amount), id:v4()};
        addTransaction(transaction);
        setData(initialState)
    }

    
  return (
    <div className='h-screen '>
        
        <div className='flex md:flex-row justify-between bg-black md:h-20 items-center md:w-3/5 m-auto mt-5 xs:text-center xs:h-14 xs:mx-5'>
            <h1 className="text-4xl font-thin font-raleway text-white ml-6 xs:text-lg"> Balance: {balance}</h1>
            <div className='flex text-white gap-2 justify-center items-center hover:scale-x-110 hover:scale-y-110 transition ease-in-out duration-300 '>
                <HistoryIcon/>
                <Link to='/History' className='text-2xl font-raleway font-thin mr-6 xs:text-lg'>View history</Link>
            </div>
        </div>
        
        <div  className="md:w-3/5 border border-black m-auto mt-5 xs:mx-5">
            <div className='my-6'>
                <div className="w-48 pl-10 cursor-pointer flex flex-col justify-between relative" onClick={()=>{setOpen((prev)=>!prev);setShowType(false)}}>
                    {showType && <div className='flex text-left gap-16'>
                        <p className='md:text-2xl font-raleway xs:-translate-x-4 xs:text-lg'>Type</p>
                        <ArrowDropDownIcon />
                        
                        
                    </div>}
                    
                        
                        {open && <div className=' pl-16 flex justify-center items-center'>
                            
                    <div className='flex'>
                        <button value='Income'  onClick={()=>{setData({...data, type:'Income'});setButtonValue('Income')}}className="font-raleway text-2xl hover:scale-x-110 hover:scale-y-110 transition duration-300 xs:text-xl ">Income</button>
                        <div className='h-8 w-px mx-3 bg-black opacity-50'></div>
                    </div>
                    
                    <div>
                        <button value='Expense' onClick={()=>{setData({...data, type: 'Expense'});setButtonValue('Expense')}}className="font-raleway md:text-2xl hover:scale-x-110 hover:scale-y-110 transition duration-300 xs:text-xl ">
                            Expense
                        </button>
                    </div>
                </div>}
                <div className='flex  flex-row'>
                    <h1 className='font-raleway text-3xl text-left xs:text-xl xs:-translate-x-4'>{buttonValue}</h1>

                    
                </div>
                        

                    </div>
                <ul className="lg:flex-row sm:flex-col sm:ml-8 lg:flex justify-between">

                            
                <div className='flex flex-col md:gap-10 lg:ml-0  mt-10 text-left xs:m-5 xs:gap-5'>
                    
                    <input className='pl-5 font-raleway text-xl border border-black h-16 md:w-96 transition duration-200 focus:scale-x-105 focus:scale-y-105 focus:outline-none xs:text-[1rem] xs:h-12' value={data.category} onChange={(e)=>setData({...data, category: e.target.value})}placeholder='Category:'/>

                    <input className='pl-5 font-raleway text-xl border h-16 md:w-96 border-black  transition duration-200 focus:scale-x-105 focus:scale-y-105 focus:outline-none xs:text-[1rem] xs:h-12' value={data.description} onChange={(e)=>setData({...data, description: e.target.value})}placeholder='Description:'/>

                    <input className='pl-5 font-raleway text-xl border h-16 md:w-96 border-black  transition duration-200 focus:scale-x-105 focus:scale-y-105 focus:outline-none xs:text-[1rem] xs:h-12' value={data.amount} onChange={(e)=>setData({...data, amount: e.target.value})} placeholder=' Amount:'/>
                     <div >
                    <button className='md:block sm:mb-10 h-16  font-raleway font-thin text-xl mb-4 bg-black text-white transition duration-300 ease-in-out hover:scale-x-110 hover:scale-y-110 hover:bg-white hover:text-black hover:border hover:border-black xs:w-full xs:hidden xs:text-[1rem] xs:h-12' type="submit" onClick={createTransaction}>CREATE</button>
                </div>
                

                </div>

                <div className=" sm:flex sm:flex-col xs:m-5">
                    
                    
                    <Calendar  className='sm:mr-5 lg:h-96 flex flex-col  justify-center transition ease-in-out duration-300 hover:scale-x-105 hover:scale-y-105 ' value={data.date} onChange={(e)=>setData({...data, date: e})}  />
                
                
               
                </div>
                <div className='md:hidden text-center font-raleway font-thin text-xl mb-4 bg-black  xs:block mx-5'>
                    <button className=' sm:mb-10 h-16   text-white transition duration-300 ease-in-out hover:scale-x-110 hover:scale-y-110 hover:bg-white hover:text-black hover:border hover:border-black xs:text-[1rem]  xs:h-12' type="submit" onClick={createTransaction}>CREATE</button>
                </div>

                

            </ul>
            </div>

        </div>

         <div className='flex md:flex-row relaive justify-between w-3/5 items-center m-auto mt-5 xs:flex-col xs:gap-5 '>

            <div className=''>
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
            
    </div>
    

  )
}

export default Main

