import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineclose} from 'react-icons/ai';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
  


  return (
    <div className='fixed  w-full z-20 ease-in duration-300'>
        <div className='w-full  mt-auto lg:flex justify-between items-center p-4 text-white'>
        <Link href='/'>
    <a img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="max-w-full h-auto rounded-full" alt="">
        </a>
        </Link>
        <ul className='lg:flex gap-10'>
            <li>
                <Link href='/'><a>Home</a></Link>
            </li>
            <li>
                <Link href='/#galley'><a>Gallary</a></Link>
            </li>
            <li>
                <Link href='/portfolio'><a>Work</a></Link>
            </li>
            <li>
                <Link href='/contact'><a>contact</a></Link>
            </li>
        </ul>
       
        {/* Mobile version*/}
        <div className='block sm:hidden md:hidden fixed top-4 right-4' onClick={()=>setToggle(!toggle)}>
            <MenuAlt2Icon className='w-6' />
        </div>
        {/* Mobile Menu*/}
        <div className={`block fixed  ${toggle?'translate-x-0': 'translate-x-full'} ease-in-out duration-300 top-0 w-1/2 right-0 bg-cyan-800 border sm:hidden md:hidden lg:hidden`}>
        <ul className='relative h-screen flex flex-col items-center justify-center gap-10'>
            <span className='absolute top-4 right-4 text-2xl font-light' onClick={()=>setToggle(!toggle)}>
                <XIcon  className='w-6'/>
                
            </span>
            <li>
                <Link href='/'><a>Home</a></Link>
            </li>
            <li>
                <Link href='/#galley'><a>Gallary</a></Link>
            </li>
            <li>
                <Link href='/portfolio'><a>Work</a></Link>
            </li>
            <li>
                <Link href='/contact'><a>contact</a></Link>
            </li>
        </ul>
        </div>
     </div>
    </div>
  )
}

export default Navbar;