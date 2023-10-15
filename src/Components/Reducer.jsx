import React,{useReducer} from "react";
const initialState=0;
const reducer =(state,action)=>{
    switch(action.type){
        case "Increment":
                return state+1;
        case "Decrement":
                return state-1;
        default:
            return state;
    }
}

export default function Reducer(){
    const [count,dispatch]=useReducer(reducer,initialState);

    return(
        <div style={{textAlign:"center"}}>
            <h3>Reducer hook</h3>
            {count} <br/>
            <button style={{padding: 20,margin: 5,backgroundColor: "green"}} onClick={()=>dispatch({type: "Increment"})}>+</button>
                    
            <button style={{padding: 20,backgroundColor: "green"}} onClick={()=>dispatch({type: "Decrement"})}>-</button>
        </div>
    )
}






