import './Header.css'
import React from 'react'
import profile from '../../assets/profile.png'

export default props =>
    <header className="header">
        <menu className="t1">
        <li className="searchFor">Navegar</li>
        <li className="arrow">&#9660;</li>
        <li className="kids">Kids</li>
        </menu>
        <menu className="t2">
        <li className="searchIcon">&#x02315;</li>
        <li className="search"></li>
        <div href="profile" className="profile"><img src={profile} alt="Move" /></div>
        <li className="arrow2">&#9660;</li>
        </menu>
    </header>