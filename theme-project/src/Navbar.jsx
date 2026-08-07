import React from 'react'

const Navbar = ({ theme, setTheme }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px',
      borderBottom: '1px solid #ccc'
    }}>
      <h3>Image Gallery</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <p>Current theme: {theme}</p>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  )
}

export default Navbar
