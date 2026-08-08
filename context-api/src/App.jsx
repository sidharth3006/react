import React from 'react'
import { ThemeProvider } from './ThemeContext'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App