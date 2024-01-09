import React from 'react';
import HomeBlender1 from './../../assets/Images/HomeBlender1.png'
import HomeBlender2 from './../../assets/Images/HomeBlender2.png'
export const BlenderHome = () => {
  return (
    <div>
      <div
        className='w-full h-screen bg-no-repeat bg-cover bg-left bg-fixed pt-10'
        style={{ backgroundImage: 'url(src/assets/Images/BlenderBack.jpg)' }}
      >
      </div>
      <div className=''>
        <div id="title" className='py-10 bg-black'>
          <h1 className='text-5xl font-bold text-center text-white'>BLENDER</h1>
        </div>
        <div id="BlenderContent" className="md:flex justify-between p-5 gap-3">
                <img
                    src={HomeBlender1} 
                    alt="Image 1"
                    className='md:w-[50%]'
                /> <br />
                <img
                    src={HomeBlender2} 
                    alt="Image 2"
                    className='md:w-[50%]'
                />
            </div>
      </div>
    </div>
  );
};
