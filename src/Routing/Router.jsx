import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Blender, Home, Unity } from '../Pages'


export const Router = () => {
  return (
    <Routes>
        {/* <Route path='/'> */}
            <Route path='/' Component={Home}/>
            <Route path='/blender' Component={Blender}/>
            <Route path='/unity' Component={Unity}/>
        {/* </Route> */}
    </Routes>
  )
}
