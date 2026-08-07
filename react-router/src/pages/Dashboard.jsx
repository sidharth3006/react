import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <p>This is a nested route example</p>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <Link to="profile" style={{ textDecoration: 'none', color: 'blue' }}>Profile</Link>
        <Link to="settings" style={{ textDecoration: 'none', color: 'blue' }}>Settings</Link>
      </div>
      
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
