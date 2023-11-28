import React from 'react'
import { Link,useNavigate  } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from 'axios'

const Login = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
     e.preventDefault()
     axios.post('http://localhost:4001/login',{ email, password })
     .then(res =>{
      if(res.data === "Success"){
        navigate('/home')
      }
     })
     .catch(err => console.log(err))
    }
  return (
    <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }} action="">
          <label htmlFor="email">Email</label>
          <input type="email" onChange={e=> setEmail(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" onChange={e=> setPassword(e.target.value)}/>
          <br />
          <button> Login</button>
        </form>
        <br />
        <p>Dont have an account?</p>
        <button>
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  )
}

export default Login