import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './auth/AdminLogin'

function App() {
  return (
    <div className='bg-gray-100 h-[100vh]'>
      <Routes>
        <Route path='/login' element={<AdminLogin/>}/>
      </Routes>
    </div>
  )
}

export default App