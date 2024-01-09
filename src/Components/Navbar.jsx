import React from 'react'
import { Link } from 'react-router-dom';
import { RiBlenderLine } from "react-icons/ri";
import { FaUnity } from "react-icons/fa";


export const Navbar = () => {
  return (
    <div className='flex justify-between md:px-10 px-4 py-4 sticky top-0 border-b-2 bg-white'>
        <div>
            <p className='font-namefont md:text-5xl text-3xl'><Link to='/'>Dharaneesh</Link></p>
        </div>
        <div className='md:flex hidden gap-3'>
            <p><Link to='/blender'><RiBlenderLine color='black' size={35} /></Link></p>
            <p><Link to='/unity'><FaUnity color='black' size={35}/></Link></p>
        </div>
    </div>
  )
}
