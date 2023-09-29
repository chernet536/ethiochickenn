import React from 'react'
import './StrategyText.css'
import Understand from '../../images/UNDERSTAND THE RURAL CUSTOMER.jpg';
import Build from '../../images/BUILD EFFICIENT TEAMS.jpg';
import Drive from '../../images/DRIVE VALUE.jpg';
import Establish from '../../images/ESTABLISH A DISTRIBUTION MODEL.jpg';
import Focused from '../../images/FOCUSED ON PROTEIN.jpg';
function StrategyText() {
  return (
    <>
    <div className='main-product2'>
    <div style={{marginTop:'200px'}}></div>
    <div className='product-images2'>
      <div className='img-container2'>
        <img src={Understand} alt='dayoldchick' className='dayoldchick' />

      </div>
      <div style={{marginTop:'170px'}} className='img-container2'>
         <h1 style={{marginLeft:'16PX'}}>UNDERSTAND THE RURAL CUSTOMER</h1>
         <p style={{fontWeight:'lighter', paddingLeft:'18px', paddingRight:'18px'}}>
         Identifying the right product: dual-purpose and layer chickens sourced from global genetics leaders.
         </p>
        
      </div>
    </div>
  </div>
  <div className='main-product2'>
    <div style={{marginTop:'177px'}}></div>
    <div className='product-images2'>
      
      <div style={{marginTop:'170px'}} className='img-container2'>
         <h1 style={{marginLeft:'16PX'}}>BUILD EFFICIENT TEAMS</h1>
         <p style={{fontWeight:'lighter', paddingLeft:'18px', paddingRight:'18px'}}>
            Creating the pipeline for skilled labor in a country that has a prevalent shortage of experience  in the poultry sector
         </p>
        
      </div>
      <div className='img-container2'>
        <img src={Build} alt='dayoldchick' className='dayoldchick' />

      </div>
    </div>
  </div>
  <div className='main-product2'>
    <div style={{marginTop:'177px'}}></div>
    <div className='product-images2'>
      <div className='img-container2'>
        <img src={Drive} alt='dayoldchick' className='dayoldchick' />

      </div>
      <div style={{marginTop:'170px'}} className='img-container2'>
         <h1 style={{marginLeft:'16PX'}}>DRIVE VALUE</h1>
         <p style={{fontWeight:'lighter', paddingLeft:'18px', paddingRight:'18px'}}>
            We are driven by a deep sense of purpose and a commitment to building world-class poulty business in the market we operate
         </p>
        
      </div>
    </div>
  </div>
  <div className='main-product2'>
    <div style={{marginTop:'177px'}}></div>
    <div className='product-images2'>
      
      <div style={{marginTop:'170px'}} className='img-container2'>
         <h1 style={{marginLeft:'16PX'}}>ESTABLISH A DISTRIBUTION MODEL</h1>
         <p style={{fontWeight:'lighter', paddingLeft:'18px', paddingRight:'18px'}}>
            A model that is well suited to the local chicken market that is also proficient to scaling to millions of Ethiopians.
         </p>
        
      </div>
      <div className='img-container2'>
        <img src={Establish} alt='dayoldchick' className='dayoldchick' />

      </div>
    </div>
  </div>
  <div className='main-product2'>
    <div style={{marginTop:'177px'}}></div>
    <div className='product-images2'>
      <div className='img-container2'>
        <img src={Focused} alt='dayoldchick' className='dayoldchick' />

      </div>
      <div style={{marginTop:'170px'}} className='img-container2'>
         <h1 style={{marginLeft:'16PX'}}>FOCUSED ON PROTEIN</h1>
         <p style={{fontWeight:'lighter', paddingLeft:'18px', paddingRight:'18px'}}>
            We serve the rapidly growing demand for poultry products among smallholder farmers and traditional consumers in under served geographies 
         </p>
        
      </div>
    </div>
  </div>
  </>
  )
}

export default StrategyText
