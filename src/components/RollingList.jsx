import React, { useContext } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';
import { ExpenseTrackerContext } from '../context/context';


const RollingList = () => {

    const {deleteTransaction,transactions}=useContext(ExpenseTrackerContext)
    
      
    
    
    
  return (
    <div className="">
        <ul>
            {transactions.map((item)=>(
                <>
                    <div key={item.id} className="flex text-left">
                        <li className="">
                            
                            <h1 className="text-lg">{item.category}</h1>
                            <div className="flex">
                                <div>
                                {item.type==="Income"?<AttachMoneyOutlinedIcon/>:<MoneyOffCsredOutlinedIcon/>}
                            </div>
                                <p className="mr-5">{item.amount}</p>
                                <p>{item.date.toString().slice(3,15)}</p>
                                <div className="ml-10" onClick={()=> deleteTransaction(item.id)}>
                                    <DeleteOutlineIcon />
                            </div>
                            </div>
                            
                        </li>
                    </div>
                </>
            ))}
        </ul>
    </div>
  )
}

export default RollingList