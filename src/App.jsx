import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Topics from './components/Topics'
import ArticlePage from './components/ArticlePage'
import IndivisualTopic from './components/IndivisualTopic'
import NoMatch from './components/NoMatch'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/articles/:article_id" element= {<ArticlePage />}/>
        <Route path= "/topics" element={<Topics/>}/>
        <Route path= "/topics/:topic" element={<IndivisualTopic/>}/>
        <Route path= "/sign-in" element={<SignIn/>} />
        <Route path= "*" element={<NoMatch/>}/>
      </Routes>
    </>
  )
}

export default App
