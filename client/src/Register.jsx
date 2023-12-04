import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
     e.preventDefault()
     axios.post('http://localhost:4001/register',{username,email,password})
     .then(res => navigate('/login'))
     .catch(err => console.log(err))
    }
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }} action="">
          <label htmlFor="name">Name</label>
          <input type="text" onChange={e=> setUsername(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input type="email" onChange={e=> setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password" onChange={e=> setPassword(e.target.value)} />
          <br />
          <button> Register</button>
        </form>
        <br />
        <p>Already have an account?</p>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Register;
