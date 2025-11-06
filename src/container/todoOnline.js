import React, { useState, useEffect } from "react";
import axios from "axios";


const TodoOnline = () => {
    let [todo, setTodo] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/todos?limit=3&skip=10')
            .then(response => {
                setTodo(response.data.todos)
            }).catch(error => {
                console.log("error", error)
            })
    }, [])

    return (
        <div>
            <button onClick={() => {
                let data = {
                    todo: 'Use DummyJSON in the project',
                    completed: false,
                    userId: 5,
                }
                axios.post('https://dummyjson.com/todos/add', data).then(res => {
                    setTodo(prev => [res.data, ...prev])
                }).catch(e => {
                    console.log("error", e)
                })
            }} >Click to Add</button>
            <button onClick={() => {
                let data = {
                    completed: true,
                }
                axios.put('https://dummyjson.com/todos/1', data).then(res => {
                    setTodo(prev => [res.data, ...prev])
                }).catch(e => {
                    console.log("error", e)
                })
            }} >Click to update</button>
             <button onClick={() => {
                axios.delete('https://dummyjson.com/todos/1').then(res => {
                    setTodo(prev => [res.data, ...prev])
                }).catch(e => {
                    console.log("error", e)
                })
            }} >Click to delete</button>
            <hr />
            {
                todo.map((item, key) => {
                    return (
                        <>
                            <p> {item.todo}</p>
                            <p>Is Completed ? {item.completed ? "True" : "False"}</p>
                            <p> Todo ID {item.id}</p>
                            <p> User ID {item.userId}</p>
                            <hr />
                        </>
                    )
                })
            }
        </div>
    )

}

export default TodoOnline