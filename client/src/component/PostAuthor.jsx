import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../images/avatar1.jpg'

const PostAuthor = () => {
  return (
    <Link to="/posts/users/abcd" className='post__author' >
      <div className="post__author-avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By: Someone Daukiya</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor