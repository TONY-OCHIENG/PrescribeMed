import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PDashboard() {
    const [doctors,setDoctors] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:5000/api/actions/getAllDoctors')
        .then((response) => {
            if (response.data.success) {
                setDoctors(response.data.results)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
  return (
    <div className=''>PDashboard</div>
  )
}

export default PDashboard