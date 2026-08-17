import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './auth/AdminLogin'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import Appointments from './pages/Appointments'
import Doctors from './pages/Doctors'
import AddDoctors from './pages/AddDoctors'

function App() {
  return (
    <div className='bg-gray-100 h-[100vh]'>
      <Routes>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/admin' element={<Admin/>}>
         <Route path='' element={<Dashboard/>}/>
         <Route path='/admin/appointments' element={<Appointments/>}/>
         <Route path='/admin/doctors' element={<Doctors/>}/>
         <Route path='/admin/add-doctors' element={<AddDoctors/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App