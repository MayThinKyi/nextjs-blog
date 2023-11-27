import getFormattedDate from '@/lib/getFormattedDate'
import { BlogPostType } from '@/types/types'
import Link from 'next/link'
import React from 'react'

type Props = {
    post:BlogPostType
}

const PostItem = ({post}: Props) => {
    const formattedDate=getFormattedDate(post.date)
  return (
    <Link href={`/posts/${post.id}`}>
        <div className='mb-6 cursor-pointer'>
        <h1 className='text-xl sm:text-2xl font-[500] hover:underline mb-2'>{post.title}</h1>
        <p className='text-lg '>{formattedDate}</p>
    </div>
    </Link>
  )
}

export default PostItem