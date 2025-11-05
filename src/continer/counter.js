
import React, {  useState } from "react";


let Counter = () =>{
  let [count,setCount]= useState(0);

  return(
    <div>
        <p> Counter : {count}</p>
        <button onClick={()=>{
            setCount(prev=>prev+1);
        }}>to add count</button>
         <button onClick={()=>{
            setCount(prev=>prev-1<0?0:prev-1);
        }}>to reduce count</button>
         <button onClick={()=>{
            setCount(0);
        }}>to reset count</button>
    </div>
  )
}

export default Counter;
