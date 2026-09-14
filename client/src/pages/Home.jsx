import React from 'react'
import Banner from './Banner'
import Navigation from '../components/Navigation'
import About from './About'
import MeetDoctors from './MeetDoctors'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <div>
     <Navigation/>   
     <Banner/>  
     <About/>
     <MeetDoctors/>    
     <Testimonials/>   
     <Contact/>
     <Footer/>
    </div>
  )
}

export default Home
