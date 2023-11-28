import React from "react";
import axios from "axios";
import { useState,useContext } from "react";
import { userContext } from "./App";
const Create = () => {
  const formData = new FormData()
  formData.append('title',title)
  formData.append('description',description)
  formData.append('email',user.email)
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4001/create',formData)
    .then(res =>{
      if(res.data === "Success"){
       console.log("posted")
      }
    })
    .catch(err=> console.log(err))
  };
  return (
    <div>
      <div style={{ height: "80vh" }}>
        <form
          
          style={{
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          onSubmit={handleSubmit}
        >
          <input type="text" onChange={e=>setTitle(e.target.value)} />
          <textarea
            onChange={e=>setDescription(e.target.value)}
            name="desc"
            id="desc"
            cols="30"
            rows="10"
          ></textarea>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
