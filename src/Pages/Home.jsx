import React from 'react'
import { BlenderHome, Intro } from '../Sections/HomeSection'
import UnityHome from '../Sections/HomeSection/UnityHome'
import { ContactHome } from '../Sections/HomeSection/ContactHome'

export const Home = () => {
  return (
    <div className='snap-y	'>
      <Intro/>
      <UnityHome/>
      <BlenderHome/> <hr />
      <ContactHome/>
    </div>
  )
}
