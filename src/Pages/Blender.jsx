import React from 'react'
import RoomModel from './../assets/BlendObjects/BaseModels'

export const Blender = () => {
  return (
    <div className='h-screen pt-10 snap-center'>
      <div className='uppercase font-namefont text-5xl' id="heading">BLENDER</div>


      <div id="girlwar1" className='h-1/2 flex justify-between px-[10%]'>
        <div id="description" >
          <h1 className='text-8xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600'>warrior Girl </h1>
          <p>*Gaming character</p>
          <p className=''><a href="">Visit .blend in </a></p>
          </div>
        <div className=''>
          <RoomModel modelPath={"src/assets/BlendObjects/fiveer girl 4.glb"} scale={1}/>
        </div>
      </div>


    </div>
  )
}
