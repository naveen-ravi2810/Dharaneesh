import React from 'react'
import HomeUnity1 from './../../assets/Images/HomeUnity1.png'
import HomeUnity2 from './../../assets/Images/HomeUnity2.png'
function UnityHome() {
  return (
    <div>
        <div
        className='h-screen w-full bg-no-repeat bg-cover bg-fit bg-fit bg-left bg-fixed pt-10'
        style={{ backgroundImage: 'url(src/assets/Images/UnityBack.jpg)'}}
      >
      </div>
      <div className=''>
        <div id="title" className='py-10 bg-black'>
          <h1 className='text-5xl font-bold text-center text-white'>UNITY</h1>
        </div>
        <div id="BlenderContent" className="md:flex justify-between p-5 gap-3">
                <img
                    src={HomeUnity1} 
                    alt="Image 1"
                    className='md:w-[50%]'
                /> <br />
                <img
                    src={HomeUnity2}
                    alt="Image 2"
                    className='md:w-[50%]'
                />
            </div>
      </div>
    </div>
  )
}

export default UnityHome