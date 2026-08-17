import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/auth" : "/api/auth"
function Admin() {
    const [adminID,setAdminID] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get(`${API_URL}/authAdmin`)
        .then((response) => {
            if (response.data.success) {
                setAdminID(response.data.adminID)
            } else {
                navigate('/login')
            }
        })
    },[adminID])
  return (
    <div>Admin</div>
  )
}

export default Admin