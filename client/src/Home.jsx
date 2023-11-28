import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Home = () => {
  const [posts,setPosts] = useState([])


   useEffect(() =>{
    axios.get('http://localhost:4001/getposts')
    .then(posts =>{
      setPosts(posts.data)
    })
    .catch(err => console.log(err))
   },[])

  return (
    <div style={{marginTop:"5%"}}>
       <div style={{width:"100vw"}}>
        {
          posts.map(post =>(
            <div style={{borderColor:"white",borderWidth:"2px",border:"solid",margin:"1%",width:'80%'}}>
              <h1>{post.title}</h1>
              <h2>{post.description}</h2>
            </div>
          ))
        }
       </div>
    </div>
  )
}

export default Home