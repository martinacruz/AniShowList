import { React, useState } from 'react'
import Search from './Search'
import '../styles/NavBar.css'

const NavBar = () => {
    const [querey, setQuerey] = useState('')

    return (
        <div className='nav-bar'>
        <div className='nav-left'>
        <div className='logo'>
            <span>ANISHOWLIST</span>
        </div>
        <div className='nav-links'>
            <a href='#' className='link'>Home</a>
            <a href='#' className='link'>About</a>
        </div>
        </div>
        <div className="seach-container">
            <Search />
        </div>
        </div>
    )
}

export default NavBar
