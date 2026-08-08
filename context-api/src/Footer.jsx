import React from 'react'
import { useTheme } from './ThemeContext'

const Footer = () => {
  const { theme } = useTheme()
  
  return (
    <footer style={{ 
      padding: '20px', 
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      textAlign: 'center'
    }}>
      <p>Footer - Theme: {theme}</p>
    </footer>
  )
}

export default Footer
