import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import githubbg from './../../assets/Images/githubbg.jpg'
import linkedinbg from './../../assets/Images/linkedinbg.jpg'
import instabg from './../../assets/Images/instagrambg.jpg'
export const ContactHome = () => {

  const githubSectionStyle = {
    backgroundImage: `url(${githubbg})`,
  };
  const linkedSectionStyle = {
    backgroundImage: `url(${linkedinbg})`
  }
  const instagramSectionStyle = {
    backgroundImage: `url(${instabg})`
  }

  return (
    <div className=' py-10'>
      <h1 className='text-center uppercase text-3xl font-titlefont'>--Contact ME--</h1>
      <div id="github" style={githubSectionStyle} className={`flex justify-between text-white p-10 text-2xl items-center`}>
        <h1><FaGithub size={30}/></h1>
        <p className='md:block hidden'>Connect On Insta</p>
        <p></p><p></p><p></p><p></p>
        <Link className='bg-blue-900 p-5 rounded-full' target='blank' to='https://github.com/DharaneeshAM'><p>GITHUB Dharaneesh</p></Link>
      </div>
      <div id="Linkedin" style={linkedSectionStyle} className='flex justify-between bg-black text-white p-10 text-2xl items-center'>
        <h1><FaLinkedin size={30}/></h1>
        <p className='md:block hidden'>Connect On LinkedIn</p>
        <p></p><p></p><p></p><p></p>
        <Link className='bg-blue-900 p-5 rounded-full' target='blank' to='https://www.linkedin.com/in/dharaneesh-a-m-bb5413237/'><p>LinkedIn Dharaneesh</p></Link>
      </div>
      <div id="Insta" style={instagramSectionStyle} className='flex justify-between bg-black text-white p-10 text-2xl items-center'>
        <h1><FaInstagram size={30}/></h1>
        <p className='md:block hidden'>Follow on Instagram</p>
        <p></p><p></p><p></p><p></p>
        <Link className='bg-blue-900 p-5 rounded-full' target='blank' to='https://www.instagram.com/dharaneesh_rage_/'><p>Instagram Dharaneesh</p></Link>
      </div>
      <div id="github"></div>
    </div>
  )
}
