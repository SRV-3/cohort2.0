import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className='foot'>
      <h1>Footer</h1>
      <h4>{theme}</h4>
      <button>Change Theme</button>
    </div>
  )
}

export default Footer
