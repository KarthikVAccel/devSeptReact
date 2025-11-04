import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  let [todo, setTodo] = useState([]);
  let [limit,setLimit] = useState(2);
  let [skip,setSkip] = useState(0);
  

  useEffect(() => {
    console.log("second  type");
  });

  useEffect(() => {
    console.log("third type");
  }, [todo]);

  return (
    <div className="App">
      {
        todo.map((item)=>{
          return (
            <div key={item.id}>
              <h3>{item.todo}</h3>
              <p>Completed: {item.completed ? "Yes" : "No"}</p>
              <p>User ID: {item.userId}</p>
              <p>Todo ID: {item.id}</p>
              <hr />
              </div>
          )
        })
      }
<hr></hr>

Limit : <input type="number" placeholder="limit" value={limit} onChange={(e)=>setLimit(e.target.value)} />
<br/>
Skip: <input type="number" placeholder="skip" value={skip} onChange={(e)=>setSkip(e.target.value)} /><br/>
<button onClick={()=>{
 axios.get(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`).then((res)=>{
  setTodo(res.data.todos);
 }).catch((err)=>{
  console.log(err); 
})
}}>Fetch Todos</button>
<button onClick={()=>{
 axios.post(`https://dummyjson.com/todos/add`,{
    todo: 'Use DummyJSON in the project',
    completed: false,
    userId: 5,
  }).then((res)=>{
  setTodo([res.data]);
 }).catch((err)=>{
  console.log(err); 
})
}}>Add Todos</button>
     
    </div>
  );
}

export default App;
