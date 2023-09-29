import React from 'react'
import './WhyChooseUs.css'
import a1 from '../../images/a1.png';
import a2 from '../../images/a2.png';
import a7 from '../../images/a7.png';
function WhyChooseUs() {
  return (
    <>
    <div className='Why-Choose'>
    <div>
        <h1 className='why-choose-us-h1'>WHY CHOOSE US?</h1>
        
    </div>
    <div className='Choose-Container'>
       <div className='one'>
            <img className='distribution'src={a1} alt='no-image' />
            <h3 className='full-package'>Full Package Supply</h3>
            <p>We provide a comprehensive solution for our customers. It includes everything a chicken grower needs to start their poultry business operation</p>
        </div> 
        <div className='two'>
            <img className='distribution2'  src={a7} alt='no-image' />
            <h3>Quality</h3>           
            <p>We place a strong emphasis on quality. We strive to provide customers with the highest standard of poultry products and services.</p>      
        </div> 
        <div className='three'>
          <img className='distribution3' src={a2} alt='no-image' />
          <h3>Technical Assistance</h3>
            <p>We provide various on-site technical assistance through our veterinary-trained professionals to our customers.</p>           
        </div> 
    </div>
   
    </div>
    </>
  )
}

export default WhyChooseUs
