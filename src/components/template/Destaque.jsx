import './Destaque.css'
import React from 'react'
import destaqueVideo from '../../assets/destaqueVideo.mp4'
import nSerie from '../../assets/nSerie.webp'
import Classific from '../../assets/Classific.png'
import n16 from '../../assets/n16.png'


export default props =>
<div className='Destaque'>
        <div className='shadow'>
        </div>   
         {/* <video autoplay="autoplay" loop="loop" controls src={destaqueVideo} type="video/mp4 controls" height="180%"width="100%">   */}
         <video id="video" controls src={destaqueVideo} type="video/mp4"  height="180%"width="100%">  

        {/* </video> */}

</video>
            <img className='nSerie' src={nSerie} alt="" />
        <div />
        <div className='sinopse'>Na pior após um acidente, o ambicioso advogado de Los Angeles <br/>
             Mickey Haller volta à ativa ao aceitar um caso de assassinato.</div>
        <div className='Classific' src={Classific} alt="" width={100} height={160}>
            <img className='n16' src={n16} alt="" />
        </div>
    </div>

window.addEventListener("load", function ()
{
    let video = window.document.querySelector("#video");
    video.play();
    video.loop = true;
});