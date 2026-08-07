import React from 'react'
import { Link, Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

const Navbar = () => {
  const navigate = useNavigate()
  
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      gap: '10px', 
      border: '1px solid black',
      padding: '10px',
      backgroundColor: '#f0f0f0'
    }}>
      <h3>React Router Demo</h3> 
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to='/' style={{ textDecoration: 'none', color: 'blue' }}>Home</Link>
        <Link to='/about' style={{ textDecoration: 'none', color: 'blue' }}>About</Link>
        <Link to='/contact' style={{ textDecoration: 'none', color: 'blue' }}>Contact</Link>
        <Link to='/dashboard' style={{ textDecoration: 'none', color: 'blue' }}>Dashboard</Link>
        <Link to='/user/1' style={{ textDecoration: 'none', color: 'blue' }}>User 1</Link>
        <Link to='/user/2' style={{ textDecoration: 'none', color: 'blue' }}>User 2</Link>
        <button 
          onClick={() => navigate('/')}
          style={{ padding: '5px 10px', cursor: 'pointer' }}
        >
          Go Home
        </button>
      </div>
    </nav>
  )
}

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Dynamic Route */}
        <Route path="/user/:id" element={<User />} />
        
        {/* Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
