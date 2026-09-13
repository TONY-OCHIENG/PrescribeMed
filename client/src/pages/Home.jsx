import React from 'react'
import Banner from './Banner'
import Navigation from '../components/Navigation'
import About from './About'
import MeetDoctors from './MeetDoctors'
import Testimonials from './Testimonials'
import Contact from './Contact'

function Home() {
  return (
    <div>
     <Navigation/>   
     <Banner/>  
     <About/>
     <MeetDoctors/>    
     <Testimonials/>   
     <Contact/>
    </div>
  )
}

export default Home
