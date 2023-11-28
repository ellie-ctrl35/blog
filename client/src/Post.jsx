import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams;
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:4001/getpostbyid")
      .then((results) => setPost(results.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
      </div>
      <Link to={`editpost/${post._id}`}>Edit</Link>
      <Link>Delete</Link>
    </div>
  );
};

export default Post;
