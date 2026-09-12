import React from 'react'
import Banner from './Banner'
import Navigation from '../components/Navigation'
import About from './About'
import MeetDoctors from './MeetDoctors'

function Home() {
  return (
    <div>
     <Navigation/>   
     <Banner/>  
     <About/>
     <MeetDoctors/>       
    </div>
  )
}

export default Home
