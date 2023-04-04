import React from 'react';
// import RollingList from '../components/RollingList';
// import {useContext} from "react";
// import { ExpenseTrackerContext } from '../context/context';

// const History = () => {
//     const {transactions}=useContext(ExpenseTrackerContext)

//   return (
//     <div>
//         {/* <div className='flex justify-center mb-10 overflow-y-scroll h-40'>
                
//             </div> */}
//             <RollingList />
//     </div>
//   )
// }

// export default History


import RollingList from '../components/RollingList';




function History() {


    return (
        <div className='flex justify-center mb-10 overflow-y-scroll h-40'>
            <RollingList />
        </div>
    );
}

export default History