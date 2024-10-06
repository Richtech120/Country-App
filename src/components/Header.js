import React from 'react'
import "./Header.css"
import './Countries.css'

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
            <h1>Where in the world?</h1>
        </div>

        <div>
            <i className='fas fa-moon'></i>Dark Mode
        </div>
      </header>
    </>
  )
}

export default Header;
