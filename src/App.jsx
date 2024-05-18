import React from 'react'
import Index from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
function App() {
  return (
    <div>
      <div className='navbar'><Index /></div>
      <div className='main'><Main/></div>
      <div className='footer'><Footer/></div>
    </div>
  )
}

export default App