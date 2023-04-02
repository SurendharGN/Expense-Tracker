const contextReducer=(state,action)=>{
    let transactions;
    switch(action.type){
        
        case "delete-transaction":
            transactions=state.filter((item)=> item.id !== action.payload)
            return transactions;

        case "add-transaction":
            transactions=[action.payload,...state]
            return transactions;

        default:
            return state;

    }

}
export default contextReducer