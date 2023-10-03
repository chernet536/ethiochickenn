import React from 'react'
import Bill from '../../images/bill2.png';
import ifc from '../../images/ifc3.png';
import finnfund from '../../images/finnfund2.PNG';
import Hendrix from '../../images/Hendrix.PNG';
import nutreco from '../../images/nutreco.PNG';
import zoetis from '../../images/zoetis.PNG';
import './OurPartners.css';
function OurPartners() {
  return (
    <>
  
    <div className='main-partners'>
      <h1 className='our-partners-title'>OUR PARTNERS</h1>
      <div className='partner-images'>
         <div className='img-container'>
            <img className='our-partner-images'  src={Bill} alt='dayoldchick'  />
        </div>
        <div className='img-container'>
            <img className='our-partner-images' src={ifc} alt='dayoldchick'  />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={finnfund} alt='dayoldchick'  />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={Hendrix} alt='dayoldchick' />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={nutreco} alt='dayoldchick' />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={zoetis} alt='dayoldchick' />
        </div>
      </div>
    </div>
   
    </>
  )
}

export default OurPartners
