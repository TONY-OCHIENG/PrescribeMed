import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './auth/AdminLogin'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import Appointments from './pages/Appointments'
import Doctors from './pages/Doctors'
import AddDoctors from './pages/AddDoctors'
import PatientRegistration from './auth/PatientRegistration'
import VerificationPage from './pages/VerificationPage'
import PatientLogin from './auth/PatientLogin'
import FogrotPassword from './auth/FogrotPassword'
import ResetPassword from './auth/ResetPassword'
import PatientDashboard from './pages/patientPages/PatientDashboard'
import PDashboard from './pages/patientPages/PDashboard'
import PAppointment from './pages/patientPages/PAppointment'


function App() {
  return (
    <div className='bg-gray-100 h-[100vh]'>
      <Routes>
        <Route path='/forgot-password' element={<FogrotPassword/>}/>
        <Route path='/reset-password/:id' element={<ResetPassword/>}/>
        <Route path='/register' element={<PatientRegistration/>}/>
        <Route path='/verify' element={<VerificationPage/>}/>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/patient-login' element={<PatientLogin/>}/>
        <Route path='/patient' element={<PatientDashboard/>}>
          <Route path='' element={<PDashboard/>}/>
          <Route path='/patient/appointments' element={<PAppointment/>}/>
        </Route>
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