import React, { useContext } from 'react';

import { ExpenseTrackerContext } from '../context/context';


const RollingList = () => {

    const {deleteTransaction,transactions}=useContext(ExpenseTrackerContext)
    
      
    
    
    
  return (
    <div className='flex  flex-col gap-6 w-3/5'>
        
            {transactions.map((item)=>(
                <>
                    <div key={item.id} className=" flex  border border-black  align-middle h-24 justify-between items-center ">
                
                            
                                <div className='ml-10'>
                                        <div className='flex'>
                                        <h1 className="text-2xl font-light font-raleway ">{item.category.toUpperCase()}</h1>

                                        <div className='h-8 w-px bg-gray-300 mx-3'></div>
                                
                                        <p className='font-raleway text-xl font-light '>{item.date.toString().slice(3,15).split('/')}</p>
                                        </div>

                                        <h1 className='font-raleway text-lg font-light text-left'>{item.description.charAt(0).toUpperCase()+item.description.slice(1)}</h1>
                                </div>
                                
                                <div className=' mr-10 flex items-top '>
                                    <p className="px-8 py-4  font-raleway h-16 text-xl font-thin flex items-center  shadow-md  ">{item.type==="Income"?`+ ${item.amount}`:`- ${item.amount}`}</p>

                                    <div className="ml-10 " onClick={()=> deleteTransaction(item.id)}>
                                    <button className='h-16 flex items-center px-8 py-3  font-raleway text-2xl font-thin  shadow-md'>Delete</button>
                                    </div>
                                </div>
                                
                            </div>

                    
                </>
            ))}
        
    </div>
  )
}

export default RollingList