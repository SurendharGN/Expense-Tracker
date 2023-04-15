import React from 'react';


import HistoryIcon from '@mui/icons-material/History';
import { Link } from 'react-router-dom';
import Input from './Input';





const Main = () => {

    

    
  return (
    <div className='md:flex md:justify-center md:flex-col '>
        
        <div className='flex md:flex-row justify-between  bg-black md:w-screen items-center md:mx-0 md:h-20 md:mt-0  m-auto xs:mt-5 xs:text-center xs:h-14 xs:mx-5 '>
            <h1 className="text-4xl font-thin font-raleway text-white ml-6 xs:text-lg">Expense Tracker</h1>
            <div className='flex text-white gap-2 justify-center items-center hover:scale-x-110 hover:scale-y-110 transition ease-in-out duration-300 '>
                <HistoryIcon/>
                <Link to='/History' className='text-2xl font-raleway font-thin mr-6 xs:text-lg'>View history</Link>
            </div>
        </div>
        
        <Input/>

         <div className='flex md:flex-row  md:w-3/5 md:mx-auto md:justify-between md:gap-2 items-center  mt-5 xs:flex-col xs:gap-5 '>

            <div className=''>
                 <Link to='/Income'  className='bg-black text-white md:w-[28rem] md:h-16 md:m-0 font-raleway font-thin text-2xl transition duration-300 ease-in-out hover:scale-x-110 hover:scale-y-110 hover:bg-white hover:text-black hover:border hover:border-black align-middle justify-center flex rounded-sm text-center pt-4 xs:w-80 xs:h-12 xs:mx-16  ' >
                    View Income
                </Link>
            </div>
            <div className='flex items-center align-middle'>
                 <Link to='/Expense' className='bg-black text-white md:w-[28rem] md:ml-5 md:h-16 font-raleway font-thin text-2xl transition duration-300 ease-in-out hover:scale-x-110 hover:scale-y-110 hover:bg-white hover:text-black hover:border hover:border-black justify-center flex text-center rounded-sm pt-4 xs:w-80 xs:h-12 '>
                    View Expense
                </Link>
            </div>
               
               
            </div>
            
    </div>
    

  )
}

export default Main

