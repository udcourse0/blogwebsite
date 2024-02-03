import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../component/PostItem'

const AuthorPosts = () => {
  const [authPosts, setAuthPosts] = useState(DUMMY_POSTS)
  return (
    <section className="author-posts">
         {authPosts.length>0 ? <div className="container author-post__container">
        {
            authPosts.map(({id, thumbnail,category,title,desc,authorID})=>  
            <PostItem key={id} id={id} thumbnail={thumbnail} category={category} title={title} 
            description={desc} authorID={authorID}/> )
        } 
        </div> : <h2 className='center'> No Posts found!</h2>}
    </section>
  )
}

export default AuthorPosts