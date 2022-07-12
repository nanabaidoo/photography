import React from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineclose} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='fixed  w-full z-20 ease-in duration-300 border'>
        <div className='w-full  mt-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
        <a><h1>Capture</h1></a>
        </Link>
        <ul className='flex gap-10 border'>
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
        {/* Mobile version*/}
        <div>
            <AiOutlineMenu size={20} />
        </div>
        {/* Mobile Menu*/}
        <div className='block bg-slate-500 border lg:hidden  '>
        <ul>
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
  )
}

export default Navbar;