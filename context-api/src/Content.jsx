import React from 'react'
import { useTheme } from './ThemeContext'

const Content = () => {
  const { theme } = useTheme()
  
  return (
    <main style={{ 
      padding: '20px', 
      backgroundColor: theme === 'light' ? '#fff' : '#222',
      color: theme === 'light' ? '#000' : '#fff',
      minHeight: '200px'
    }}>
      <h3>Content Area</h3>
      <p>Current theme: {theme}</p>
      <p>This component uses the same context as Header!</p>
    </main>
  )
}

export default Content
