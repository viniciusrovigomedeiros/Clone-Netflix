import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Main from '../components/template/Main'


export default props =>
    <div className="app">
        <Logo />
        <Main icon='home'/>
    </div>