import React from 'react'
import './Carroseis.css'

const CarroselTop10 = ({category}) => (
    <div className='Netflix'>
        <div className="swiper-container">
            <h2>{category.title}</h2>
                <div className="corouselTop">
                    {category.moviesTop10.map(x => (
                        <div href="swiper-slide"><img src={x.image} alt="" width={212.75} height={151.95}/></div>
                    ))}
                </div>
        </div>
    </div>
)

export default CarroselTop10;