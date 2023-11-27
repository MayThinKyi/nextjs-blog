import getFormattedDate from '@/lib/getFormattedDate';
import { getPostData } from '@/lib/getPostData';
import { getSortedPostsData } from '@/lib/getSortedPostsData';
import Link from 'next/link';
import React from 'react'

type Props = {
    params:{
        postId:string;
    }
}
export function generateStaticParams(){
    const posts=getSortedPostsData();
    return posts.map((post)=>{
        postId:post.id
    })
}
export const generateMetadata=async({params:{postId}}: Props)=>{
    const post=await getPostData(postId);
    return {
        title:post.title,
        description:`A Blog post about ${post.title}`
    }
}

const BlogPage =async ({params:{postId}}: Props) => {
    const post=await getPostData(postId);
    const formattedDate=getFormattedDate(post.date);
    //console.log(post);
  return (
    <div className='px-5 sm:px-10 lg:px-[150px] py-10 mt-[100px]'>
        <h1 className='text-3xl hover:underline font-[500] mb-8'>{post.title}</h1>
        <section dangerouslySetInnerHTML={{__html:post.contentHtml}} />
        <p className='my-10 font-[500] text-lg'>{formattedDate}</p>
        <Link className='underline ' href={'/'}>← Back to home</Link>
    </div>
  )
}

export default BlogPage