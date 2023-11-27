import Link from 'next/link';
import React from 'react'
import { FaYoutube,FaGraduationCap,FaGithub,FaInstagram,FaCoffee } from "react-icons/fa";

const Navbar = () => {
    const flexBetween='flex items-center justify-between'
  return (
    <div className={`cursor-pointer ${flexBetween} flex-wrap sm:flex-nowrap fixed top-0 right-0 left-0 py-6 px-5 sm:px-10 md:px-[200px] shadow-sm bg-slate-600`}>
      <div>
        <Link href='/'>
            <h1 className='text-2xl mb-5 sm:mb-0 sm:text-3xl font-semibold'>Next Blog</h1>
        </Link>
      </div>
      <div className='flex items-center gap-6 text-2xl sm:text-4xl'>
        <FaYoutube/>
        <FaGraduationCap/>
        <FaGithub/>
        <FaInstagram/>
        <FaCoffee/>
      </div>
    </div>
  )
}

export default Navbar
