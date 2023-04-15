import React from 'react';
import Calendar from 'react-calendar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState,useContext } from 'react';
import '../stlying/calendar.css';
import { ExpenseTrackerContext } from '../context/context';
import {v4 } from 'uuid';
import { useRef } from 'react';


const initialState={
    
    amount:'',
    category:'',
    description:'',
    type:'Income',
    date: new Date()
}

const Input = () => {
    const ref=useRef(null)

    const [open,setOpen]=useState(false);
    const [data,setData]=useState(initialState)
    
    const [showType,setShowType]=useState(true);
    const [buttonValue,setButtonValue]=useState('')

    const {addTransaction}=useContext(ExpenseTrackerContext);
    
    const createTransaction=()=>{
        const transaction={...data, amount:Number(data.amount), id:v4()};
        addTransaction(transaction);
        setData(initialState)
    }

    // const [category,setCategory]=useState('');
    // const [amount,setAmount]=useState('');

    const [categoryError,setCategoryError]=useState(false);
    const [amountError,setAmountError]=useState(false)
    const verifyCategory=()=>{
        
        if(data.category.length===0 || typeof data.category !== 'string'){
            setCategoryError(true)
        }

    }

    const verifyAmount=()=>{
        
        if((data.amount.length===0 || typeof data.amount !== 'string')){
            setAmountError(true);
            
        }
    }
    
    function approveTransaction(){
        
        if(!categoryError){
            createTransaction();
            
        } else if(!amountError){
            return (()=>createTransaction);
        }
    }

    

    
    

    
    
  return (
    <div  className="md:w-3/5 xs:border rounded-sm xs:border-black md:border-none md:mx-auto mt-5 xs:mx-5">
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

                            
                <form onSubmit={(e)=>{e.preventDefault()}} className='flex flex-col md:gap-10 lg:ml-0 mt-10 text-left xs:m-5 xs:gap-5 '>
                    
                    <input ref={ref} type='text' id='category' className='pl-5 font-raleway text-xl border border-black h-16 md:w-96 transition duration-200 focus:scale-x-105 rounded-sm focus:scale-y-105 focus:outline-none xs:text-[1rem] xs:h-12' onClick={()=>{setCategoryError(false)}} value={data.category} onChange={(e)=>{setData({...data, category: e.target.value});}} placeholder='*Category:'  />
                    {categoryError && <label >*Category cannot be empty</label>}

                    <input className='pl-5 font-raleway text-xl border h-16 md:w-96 border-black rounded-sm  transition duration-200 focus:scale-x-105 focus:scale-y-105 focus:outline-none xs:text-[1rem] xs:h-12' value={data.description} onChange={(e)=>setData({...data, description: e.target.value})}placeholder='Description (optional):'/>

                    <input id='amount' className='pl-5 font-raleway text-xl border h-16 md:w-96 border-black  transition duration-200 focus:scale-x-105 rounded-sm focus:scale-y-105 focus:outline-none xs:text-[1rem] xs:h-12' value={data.amount} onClick={()=>{setAmountError(false)}} onChange={(e)=>setData({...data, amount: e.target.value})} placeholder='*Amount:'/>
                    {amountError && <label>*Amount cannot be empty</label>}
                    
                     <div >
                    <button className='md:block sm:mb-10 h-12  font-raleway font-thin text-xl mb-4 bg-black text-white transition duration-300 ease-in-out hover:scale-x-110 hover:scale-y-110 hover:bg-white hover:text-black hover:border hover:border-black xs:w-full rounded-sm xs:hidden xs:text-[1rem] xs:h-12' type="submit" onClick={()=>{verifyCategory();verifyAmount();approveTransaction()}}>CREATE</button>
                </div>
                

                </form>

                <div className="  sm:flex sm:flex-col xs:m-5">
                    
                    
                    <Calendar  className='sm:mr-5 lg:h-96 flex flex-col rounded-sm justify-center transition ease-in-out duration-300 hover:scale-x-105 hover:scale-y-105 ' value={data.date} onChange={(e)=>setData({...data, date: e})}  />
                
                
               
                </div>
                <div className=''>
                    <button className='md:hidden text-center font-raleway font-thin text-xl  mb-4 bg-black  xs:block mx-5 w-3/5 sm:mb-10 text-white transition duration-300 ease-in-out  rounded-sm hover:scale-x-110 hover:scale-y-110 hover:bg-white hover:text-black hover:border hover:border-black xs:text-[1rem]  xs:h-12' type="submit" onClick={()=>{verifyCategory();verifyAmount();approveTransaction()}}>CREATE</button>
                </div>

                

            </ul>
            </div>

        </div>
  )
}

export default Input