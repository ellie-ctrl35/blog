import React from "react";
import axios from "axios";
import { useState } from "react";
const Create = () => {
  const [title, setTitle] = useState();
  const [description, setdescription] = useState();
  const [file, setfile] = useState();
  const handlePost = (e) => {
    
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
          onSubmit={handlePost}
        >
          <input type="text" />
          <textarea
           
            name="desc"
            id="desc"
            cols="30"
            rows="10"
          ></textarea>
          <input type="file" />
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
