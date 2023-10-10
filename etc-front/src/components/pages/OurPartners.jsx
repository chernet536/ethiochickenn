import React from 'react'
import Bill from '../../images/Untitled-1Artboard-1.png';
import ifc from '../../images/Untitled-1Artboard-1-copy-2.png';
import finnfund from '../../images/Untitled-1Artboard-1-copy.png';
import Hendrix from '../../images/Untitled-1Artboard-1-copy-3.png';
import nutreco from '../../images/Untitled-1Artboard-1-copy-5.png';
import zoetis from '../../images/Untitled-1Artboard-1-copy-4.png';
import './OurPartners.css';
function OurPartners() {
  return (
    <>
  
    <div className='main-partners'>
      <h1 className='our-partners-title'>OUR PARTNERS</h1>
      <div className='partner-images'>
         <div className='img-container imc1'>
            <img className='our-partner-images'  src={Bill} alt='dayoldchick'  />
        </div>
        <div className='img-container'>
            <img className='our-partner-images' src={finnfund} alt='dayoldchick'  />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={ifc} alt='dayoldchick'  />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={Hendrix} alt='dayoldchick' />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={zoetis} alt='dayoldchick' />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={nutreco} alt='dayoldchick' />
        </div>
      </div>
    </div>
   
    </>
  )
}

export default OurPartners
