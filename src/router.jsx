import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/home/home'
import TodoApp01Component from './components/todoApp1/todoApp01'
import TodoApp02Component from './components/todoApp2/todoApp02'
import TodoApp03Component from './components/todoApp3/todoApp03'

const RouterComponent = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeComponent/>}/>
            <Route path='todoApp01' element={<TodoApp01Component/>}/>
            <Route path='todoApp02' element={<TodoApp02Component/>}/>
            <Route path='todoApp03' element={<TodoApp03Component/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterComponent