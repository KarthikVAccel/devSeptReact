import logo from "./logo.svg";
import "./App.css";
import Counter from "./container/counter";
import TodoLocal from "./container/todo";
import TodoOnline from "./container/todoOnline";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

let Protected = ({children}) =>{
    let isAuth = true

    return isAuth ? children : <Navigate to="/login" />;

}


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Counter</Link> <br/>
         <Link to="/todoLocal">TodoLocal</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
         <Route path="/login" element={
          <>
            <p> You donot have access</p>
          </>
         } />
        <Route path="/todoLocal" element={<Protected> <TodoLocal/> </Protected>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
