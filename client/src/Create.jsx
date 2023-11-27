import React from "react";
import axios from "axios";
import { useState } from "react";
const Create = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();
   
  const handleSubmit = (e) => {
    e.preventdefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('file',file)
    axios.post('http://localhost:4001/create',formData)
    .then(res =>{
      console.log(res)
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
          <input type="file" name="file" onChange={e=>setFile(e.target.files[0])}/>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
