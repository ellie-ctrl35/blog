import axios from "axios";
import React, { useEffect, useState ,useContext} from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import { userContext } from "./App";

const Post = () => {
  const { id } = useParams;
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const user = useContext(userContext)
 

  useEffect(() => {
    axios
      .get("http://localhost:4001/getpostbyid"+id)
      .then((results) => setPost(results.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) =>{
    axios.delete('http://localhost:4001/deletepost'+id)
    .then((results) => {
        navigate('/home')
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
      </div>
      <div>
      {
        user.email === post.email ? <>
          <Link to={`/editpost/${post._id}`}>Edit</Link>
      <button onClick={e =>handleDelete(post._id)} >Delete</button>
        </>:<></>
      }
      </div>
    </div>
  );
};

export default Post;
