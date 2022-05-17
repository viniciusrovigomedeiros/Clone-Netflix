import './Main.css'
import React from 'react'
import Header from './Header'

import CarroselEmAlta from './CarroselEmAlta'
import CarroselLancamentos from './CarroselLancamentos'
import CarroselTop10 from './CarroselTop10'
import CarroselReality from './CarroselReality'
import CarroselDocs from './CarroselDocs'
import Destaque from './Destaque'


import { EmAlta } from '../../api/EmAlta'
import { Lancamentos } from '../../api/Lancamentos'
import { ftop10 } from '../../api/Top10'
import { Reality } from '../../api/Reality'
import { Docs } from '../../api/Docs'
import Teste from './Teste'

export default props =>
<React.Fragment>
        <main className="content">
        <Header {...props}/>
        <Destaque className="destaque"/>
        <CarroselEmAlta className="Carrosel" category={EmAlta} />
        <CarroselLancamentos className="Carrosel" category={Lancamentos} />            
        <CarroselTop10 className="Carrosel" category={ftop10} />            
        <CarroselReality className="Carrosel" category={Reality} />    
        <CarroselDocs className="Carrosel" category={Docs} />  
        </main>
        <Teste className="barraLateral"/>  
    </React.Fragment>