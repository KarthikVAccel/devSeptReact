import logo from "./logo.svg";
import "./App.css";
import Counter from "./continer/counter";
import TodoLocal from "./continer/todo";
import React, { useEffect, useState } from "react";


let App = () =>{

  return(
    <div>
       <Counter></Counter>
       <hr></hr>
       <TodoLocal />
    </div>
  )
}

export default App;
