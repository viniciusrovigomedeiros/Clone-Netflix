import './Header.css'
import React from 'react'
import profile from '../../assets/profile.png'
import logo from '../../assets/logo.png'

export default props =>
    <header className="header">
        <nav className="menu">
            
            <a href="/" className="logo"><img src={logo} alt="logo" width={90} height={25}/></a>
            <li>
                <a className="#inicio">Início</a>
            </li>
            <li>
                <a className="#series">Séries</a>
            </li>
            <li>
                <a className="#filmes">Filmes</a>
            </li>
            <li>
                <a className="#bombando">Bombando</a>
            </li>
            <li>
                <a className="#minhaLista">Minha Lista</a>
            </li>
            <li>
                <a className="#idiomas">Navegar por idiomas</a>
            </li>
        </nav>

        <nav className="menu2">
            <li>
                <a className="searchIcon">&#x02315;</a>
            </li>
            <li>
                <a className="#infantil">Infantil</a>
            </li>
            <li>
            <span class="material-icons">notifications</span>
            </li>
        </nav>
        <nav className="menu3">
            <li>
                <div className="profile"><img src={profile} alt="Move" /></div>
            </li>
            <li>
                <li className="arrow2">&#9660;</li>
            </li>
        </nav>
    </header>