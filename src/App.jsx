import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import SignIn from './components/SignIn'
import Topics from './components/Topics'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/topics" element={<Topics/>}/>
        <Route path="/sign-in" element={<SignIn/>} />
      </Routes>
    </>
  )
}

export default App
