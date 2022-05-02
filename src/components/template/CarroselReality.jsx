import React from 'react'
import './Carroseis.css'

const CarroselReality = ({category}) => (
    <div className='Netflix'>
        <div className="swiper-container">
            {/* --------- */}
            <h2>{category.title}</h2>
                <div className="corousel">
                    {category.reality.map(x => (
                        <div href="swiper-slide"><img src={x.image} alt="" width={212.75} height={119}/></div>
                    ))}
                </div>
            {/* --------- */}

            {/* --------- */}
        </div>
    </div>
)

export default CarroselReality;