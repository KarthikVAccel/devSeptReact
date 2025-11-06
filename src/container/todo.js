import React,{useState} from "react";

let TodoLocal =()=>{
    let [todo,setTodo] = useState([]);

    return (
        <div>
            <button onClick={()=>{
                let randomNumber = Math.floor(Math.random()*100)
                let v = {
                    name:`task ${randomNumber}`
                }
                setTodo(prev=>[...prev,v])
            }}>click to add</button>
            <button onClick={()=>{
                setTodo(prev=>[...prev.slice(0,prev.length-1)])
            }}>click to delete bottom task</button>
            <button onClick={()=>{
                setTodo(prev=>[...prev.slice(1)])
            }}>click to delete top task</button>
            <hr />
            {todo.map((item,key)=>{
               return <>
                <p onClick={()=>{
                    setTodo(prev=>[...prev.slice(0,key),...prev.slice(key+1)])
                }}> {item.name}</p>
                
                </>
            })}

            
        </div>
    )

}

export default TodoLocal