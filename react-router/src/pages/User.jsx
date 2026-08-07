import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
      <p>This is a dynamic route example</p>
    </div>
  )
}

export default User
