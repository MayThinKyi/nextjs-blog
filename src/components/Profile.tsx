import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-10'>
      <div>
        <Image src={'/images/maythinkyi.jpg'} alt='May Thin Kyi'
        width={200} height={200} className='rounded-full border-2'
        priority={true}
         />
      </div>
      <div>
        <h1 className='text-2xl sm:text-4xl font-semibold mb-2 sm:mb-6'>Hello and Welcome</h1>
        <h1 className='text-2xl sm:text-4xl font-semibold '>👋 I&apos;m May Thin Kyi.</h1>
      </div>
    </div>
  )
}

export default Profile
