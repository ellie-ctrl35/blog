import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const EditPost = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const { id } = useParams();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4001/editpost/"+id , { title, description })
      .then((res) => {
        if (res.data === "Success") {
         navigate('/home')
        }
      })
      .catch((err) => console.log(err));
  }; 

  useEffect(() => {
    axios
      .get("http://localhost:4001/getpostbyid"+id)
      .then(posts => {
        setTitle(posts.data.title)
        setDescription(posts.data.description)
      })
      .catch((err) => console.log(err));
  }, []);
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
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea
          value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="desc"
            id="desc"
            cols="30"
            rows="10"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
