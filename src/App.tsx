import React from 'react'
import { Routes } from './modules/Routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

// @ts-ignore
import backgroundImage from './assets/images/background.png'

function App() {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: `url(${backgroundImage})`,
          position: 'fixed',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom'
        }}
      ></div>
      <Router>
        <Routes />
      </Router>
    </>
  )
}

export default App
