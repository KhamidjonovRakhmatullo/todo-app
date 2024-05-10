import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/home/home'

const RouterComponent = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeComponent/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterComponent