import React from 'react'
import Think from '../../images/ThinkLikeAnOwner.jpg';
import OurHistory from '../../images/BUILD EFFICIENT TEAMS.jpg';

import './AboutText.css'; 

function AboutText() {
  return (
  <div className='main-product'>
    <div style={{marginTop:'200px'}}></div>
    <div className='amount-images'>
      <div className='img-container'>
         <h1>Our Story</h1>
         <p style={{justifyContent:'true', textAlign:'justify',fontWeight:'lighter',paddingLeft:'30px', paddingRight:'30px'}}>
             
         In the heart of Ethiopia, a transformative journey began in 2010 when EthioChicken sowed the seeds of change with its first farm in the Northern part of Ethiopia, in Mekelle Tigray region. Little did they know that this was the beginning of a poultry revolution that would touch the lives of millions. 
Fast forward to 2014, after years of unwavering dedication to research and development, EthioChicken unveiled its game-changing innovation to the Ethiopian poultry landscape: The SASSO T451 is a dual-purpose (eggs and meat), hardy, free-range, scavenging chicken which thrives among rural smallholder farmers.
EthioChicken's growth was nothing short of remarkable. What started as a modest initiative had rapidly blossomed into a nationwide enterprise, employing more than 1,600 Ethiopians and distributing over 30 million chicks annually. With unwavering dedication, the company embarked on a mission to transform the lives of smallholder farmers.
With a network spanning across Ethiopia, EthioChicken now operates nine breeder farms and four hatcheries strategically located in the regions of Oromia, SNNPR, Amhara, and Tigray. These facilities work tirelessly to produce high-quality day-old chicks (DOCs), which are then distributed to thousands of agents in rural Weredas. The company also boasts two state-of-the-art feed mills that produce top-quality feed, essential to the chicks' health and growth. 
The journey of EthioChicken would not have been possible without the unwavering support of government partnerships and the trust of investors such as Finnfund, IFC, and the Bill and Melinda Gates Foundation. However, the true driving force behind this inspiring transformation is the dedication and passion of the EthioChicken team.


         </p>
        
      </div>
    
      <div className='img-container'>
        <img src={OurHistory} alt='dayoldchick' className='dayoldchick' />

      </div>
    </div>
    <div style={{marginBottom:'80px'}}></div>

  </div>
  )
}

export default AboutText
