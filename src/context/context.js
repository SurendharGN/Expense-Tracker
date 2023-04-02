import React from "react";
import { useReducer,createContext } from "react";
import contextReducer from "./contextReducer";

const initialState=[];
export const ExpenseTrackerContext=createContext(initialState);
export const Provider=({children})=>{
    const [transactions,dispatch]=useReducer(contextReducer, initialState);
    

    const deleteTransaction=(id)=>{
        dispatch({type:"delete-transaction",payload:id}) 
    }
    const addTransaction=(transaction)=>{
        dispatch({type:"add-transaction",payload:transaction}) 
    }


    return (
        <ExpenseTrackerContext.Provider value=  {{deleteTransaction,
        addTransaction,transactions}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
