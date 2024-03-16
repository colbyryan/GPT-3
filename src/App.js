import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css'
import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => 
        setBackendData(data)
    )
  }, [])
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar /> 
        <Header />
      </div>
        <Brand /> 
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog /> 
        <Footer />
    </div>
  )
}


export default App
