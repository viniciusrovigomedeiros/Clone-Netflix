import './Main.css'
import React from 'react'
import Header from './Header'

import CarroselEmAlta from './CarroselEmAlta'
import CarroselLancamentos from './CarroselLancamentos'
import CarroselTop10 from './CarroselTop10'
import CarroselReality from './CarroselReality'
import CarroselDocs from './CarroselDocs'


import { EmAlta } from '../../api/EmAlta'
import { Lancamentos } from '../../api/Lancamentos'
import { ftop10 } from '../../api/Top10'
import { Reality } from '../../api/Reality'
import { Docs } from '../../api/Docs'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content">
            <CarroselEmAlta category={EmAlta} />  
            <CarroselLancamentos category={Lancamentos} />            
            <CarroselTop10 category={ftop10} />            
            <CarroselReality category={Reality} />    
            <CarroselDocs category={Docs} />    
        </main>
    </React.Fragment>