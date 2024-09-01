import React from 'react';
import { useState } from 'react'
import {Routes , Route , RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
// import {Home , About ,Contact} from '../components/index'
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import User from '../components/User/User';
import Layout from '../layout/layout';

function App() {

  // it's a first way 

  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<Layout/>,
  //     children:[
  //       {
  //         path:'/',
  //         element:<Home/>
  //       },
  //       {
  //         path:'about',
  //         element:<About/>
  //       },
  //       {
  //         path:'contact',
  //         element:<Contact/>
  //       }
  //     ]
  //   }
  // ])

  //it's a second way 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userId' element={<User/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
