import React from 'react'
import { useTheme } from './ThemeContext'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <header style={{ 
      padding: '20px', 
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2>My App</h2>
      <button 
        onClick={toggleTheme}
        style={{ 
          padding: '8px 16px', 
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Toggle Theme
      </button>
    </header>
  )
}

export default Header
