import AmongUs from './../../assets/Gifs/AmongUS.gif'
import ArrowKeys from './../../assets/Gifs/ArrowKeys.gif'
import GreenCar from './../../assets/Gifs/GreenCar.gif'
import JoyStick from './../../assets/Gifs/JoyStick.gif'
import KeyMan from './../../assets/Gifs/KeyMan.gif'
import RedPencil from './../../assets/Gifs/RedPencil.gif'
import SideArrowKeys from './../../assets/Gifs/SideArrowKeys.gif'
import React from 'react'
import dharaneshPhoto from './../../assets/Images/Dharaneesh.jpeg'
export const Intro = () => {
  return (
    <div className='md:h-screen md:py-0 py-10 snap-center flex justify-center items-center md:px-0 px-10'>
        <div>
            <div className='md:flex hidden justify-center'>
                <img src={AmongUs} alt="amongus" />
                <img src={ArrowKeys} alt="ArrowKeys" />
                <img src={GreenCar} alt="GreenCar" />
                <img src={JoyStick} alt="JoyStick" />
            </div>
            <div className='flex justify-center gap-4 items-center'>
                <div className='md:block hidden'>
                    <img src={dharaneshPhoto} className='h-96' alt='dharaneshPhoto'/>
                </div>
                <div  className='md:w-1/2'>
                    <h1 className='uppercase font-titlefont underline text-3xl'> About Me !!! </h1>
                    <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className='md:flex hidden justify-center'>
                <img src={KeyMan} alt="KeyMan" />
                <img src={RedPencil} alt="RedPencil" />
                <img src={SideArrowKeys} alt="SideArrowKeys" />
            </div>
        </div>
    </div>
  )
}
