import React from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineclose} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] mt-auto flex justify-between items-center p-4 text-white'>
        <link href='/'>
        <h1>Capture</h1>
        </link>
        <ul>
            <li>
                <link href='/'>Home</link>
            </li>
            <li>
                <link href='/#galley'>Gallary</link>
            </li>
            <li>
                <link href='/portfolio'>Work</link>
            </li>
            <li>
                <link href='/contact'>contact</link>
            </li>
        </ul>
        {/* Mobile version*/}
        <div>
            <AiOutlineMenu size={20} />
        </div>
        {/* Mobile Menu*/}
        <div>
        <ul>
            <li>
                <link href='/'>Home</link>
            </li>
            <li>
                <link href='/#galley'>Gallary</link>
            </li>
            <li>
                <link href='/portfolio'>Work</link>
            </li>
            <li>
                <link href='/contact'>contact</link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar;