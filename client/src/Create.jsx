import React from "react";
import axios from "axios";
import { useState } from "react";
const Create = () => {
  const [title, setTitle] = useState();
  const [description, setdescription] = useState();
  const [file, setfile] = useState();
  const handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    axios
      .post("http://localhost:4001/create", { title, description, file })
      .then((req) => {
        if (!req) {
          console.log("No response");
        } else {
          console.log("posted");
        }
      });
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
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
          <textarea
            onChange={(e) => setdescription(e.target.value)}
            name="desc"
            id="desc"
            cols="30"
            rows="10"
          ></textarea>
          <input onChange={(e) => setfile(e.target.files[1])} type="file" />
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
