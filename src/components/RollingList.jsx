import React, { useContext } from 'react';

import { ExpenseTrackerContext } from '../context/context';


const RollingList = () => {

    const {deleteTransaction,transactions}=useContext(ExpenseTrackerContext)
    
      
    
    
    
  return (
    <div className='flex flex-col md:w-3/5 xs:w-full '>
        
            {transactions.map((item)=>(
                <>
                    <div key={item.id} className=" flex  border border-black align-middle md:h-24 xs:h-20  justify-between items-center m-5">
                
                            
                                <div className='md:ml-10 xs:ml-5 '>
                                        <div className='flex'>
                                        <h1 className="md:text-2xl font-light font-raleway xs:text-lg ">{item.category.toUpperCase()}</h1>

                                        <div className='h-8 w-px bg-gray-300 mx-3'></div>
                                
                                        <p className='font-raleway md:text-xl xs:text-sm font-light xs:w-24'>{item.date.toString().slice(3,15).split('/')}</p>
                                        </div>

                                        <h1 className='font-raleway md:text-lg xs:text-sm font-light text-left'>{item.description.charAt(0).toUpperCase()+item.description.slice(1)}</h1>
                                </div>
                                
                                <div className=' mr-10 flex md:items-top md:flex-row xs:flex-col xs:items-center xs:gap-2 '>
                                    <p className="md:px-8 md:py-4  font-raleway h-16 md:text-xl font-thin flex items-center  shadow-md  xs:w-16 xs:h-8">{item.type==="Income"?`+ ${item.amount}`:`- ${item.amount}`}</p>

                                    <div className="md:ml-10 " onClick={()=> deleteTransaction(item.id)}>
                                    <button className='md:h-16 flex items-center justify-center md:px-8 md:py-3  font-raleway md:text-2xl font-thin  shadow-md xs:h-8 xs:w-16'>Delete</button>
                                    </div>
                                </div>
                                
                            </div>

                    
                </>
            ))}
        
    </div>
  )
}

export default RollingList