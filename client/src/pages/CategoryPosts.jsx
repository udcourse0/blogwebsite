import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../component/PostItem'

const CategoryPosts = () => {
  const [categoryPosts, setCategoryPosts] = useState(DUMMY_POSTS)
  return (
    <section className="category-posts">
         {categoryPosts.length>0 ? <div className="container category-post__container">
        {
            categoryPosts.map(({id, thumbnail,category,title,desc,authorID})=>  
            <PostItem key={id} id={id} thumbnail={thumbnail} category={category} title={title} 
            description={desc} authorID={authorID}/> )
        } 
        </div> : <h2 className='center'> No Posts found!</h2>}
    </section>
  )
}

export default CategoryPosts