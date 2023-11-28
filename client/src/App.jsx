import { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { createContext } from "react";
import axios from "axios"
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Create from "./Create";
import Post from "./Post";
import EditPost from "./EditPost";

export const userContext = createContext();

function App() {
  const [user,setUser]= useState({})
  axios.defaults.withCredentials = true;
  useEffect(()=>{
 axios.get('http://localhost:4001/')
 .then(user=>{
   setUser(user.data)
 })
 .catch(err=> console.log(err))
  })
  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/post" element={<Post/>}></Route>
          <Route path="/editpost/:id" element={<EditPost/>}></Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
