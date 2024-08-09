import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StarsCanvas,About ,Experience,Contact,Navbar,Tech,Works,Hero } from './components/components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
          <Navbar />
          <Hero />
        </div>
        <div className='pl-[5%] pr-[5%]'>
        <About/>
        <Experience />
        <Tech />
        <Works />
      
        </div>
        <div className= 'relative z-0 '>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App