import React from 'react'
import './CarroselEmAlta.css'

const CarroselTop10 = ({category}) => (
    <div className='Netflix'>
        <div className="swiper-container">
            {/* --------- */}
            <h2>{category.title}</h2>
                <div className="corousel">
                    {category.moviesTop10.map(x => (
                        <div href="swiper-slide"><img src={x.image} alt="" width={212} height={119}/></div>
                    ))}
                </div>
            {/* --------- */}

            {/* --------- */}
        </div>
    </div>
)

export default CarroselTop10;