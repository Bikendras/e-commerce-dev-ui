import React, { useState } from "react";

export default  function Counter(){
    const [initialState,setInitinalState]=useState(0);
    const handleIncreament=()=>{    
        console.log("count increament");
        if(initialState<5){
            setInitinalState(initialState+1);
        }else{
            alert("value never greater then 5");
        }
    }
    const handleDecreament=()=>{
        console.log("count decreament");
        if(initialState>0){
        setInitinalState(initialState-1);
        }else{
            alert("value never less then 0");
        }
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Counter</h1>
            <button style={{padding:"10px 20px"}} onClick={handleIncreament}>+</button>
            <span>Count :  {initialState}</span>
            <button style={{padding:"10px 20px"}} onClick={handleDecreament}>-</button>
        </div>
    )
}