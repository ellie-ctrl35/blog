import React,{useEffect} from 'react'
import axios from 'axios'

const Home = () => {

   useEffect(() =>{
    axios.get('http://localhost:4001/getposts')
    .then(post => console.log(posts))
    .catch(err => console.log(err))
   },[])

  return (
    <div>Home</div>
  )
}

export default Home