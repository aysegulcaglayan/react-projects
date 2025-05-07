import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import NewPost from './pages/NewPost'
import BlogDetail from './pages/BlogDetail'
import Signup from './pages/Signup'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={< BlogDetail />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
