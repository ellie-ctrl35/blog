import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const {id}= useParams
    useEffect(() => {

    },[])
  return (
    <div>Post</div>
  )
}

export default Post