import './Logo.css'
import logo from '../../assets/logo.png'
//import logo from '../../assets/img2.png'
import React from 'react'

export default props => 
    <aside className='logo'>
        <a href="/" className="logo"><img src={logo} alt="logo" /></a>
    </aside>