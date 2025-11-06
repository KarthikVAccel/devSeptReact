import logo from "./logo.svg";
import "./App.css";
import Counter from "./container/counter";
import TodoLocal from "./container/todo";
import TodoOnline from "./container/todoOnline";
import React, { useEffect, useState } from "react";


let App = () =>{

  return(
    <div>
       <TodoOnline />
    </div>
  )
}

export default App;
