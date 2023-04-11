import React from 'react';
import RollingList from '../components/RollingList';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const History = () => {

  return (
    <div className=' flex flex-col justify-center items-center gap-10 align-middle w-screen  '>
        <div className='flex flex-row justify-between bg-black h-20 items-center w-3/5 m-auto mt-5  xs:w-full '>
            <h1 className="text-4xl font-thin font-raleway text-white ml-6">Balance: </h1>
            <div className='flex text-white gap-2 justify-center items-center hover:scale-x-110 hover:scale-y-110 transition ease-in-out duration-300'>
                
                <div className='flex justify-center items-center gap-1'>
                    <HomeIcon/>
                     <Link to='/' className='text-2xl font-raleway font-thin mr-6'>Home</Link>
                </div>
               
            </div>
        </div>
        <RollingList/>

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
    </div>
  )
  
}

export default History