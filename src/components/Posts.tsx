import { getSortedPostsData } from '@/lib/getSortedPostsData'
import { BlogPostType } from '@/types/types';
import React from 'react'
import PostItem from './PostItem';

const Posts = () => {
    const posts=getSortedPostsData();
    console.log(posts)
  return (
    <div className='py-10 px-5 sm:px-10 lg:px-[150px]'>
      {posts.map((post:BlogPostType)=>{
        return <PostItem key={post.id} post={post} />
      })}
    </div>
  )
}

export default Posts
