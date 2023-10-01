import React from 'react'
import './DayChickContent.css';
import sasso from '../../images/sasso.PNG';
import BrownEgg from '../../images/BrownEggLayer.PNG';
import Lohmann from '../../images/lohmannbrown.PNG';
function DayChickContent() {
  return (
    <div className='container8'>
       <div className='paragraph5'>
         <img className='sasso'src={sasso} alt='no-image' />
          <h1>Sasso T451</h1>
          <p>Dual purpose chicken that can be used for both egg and meat production under scavenger/supplement feeding environments.</p>
       </div>
       <div className='paragraph6'>
         <img className='BrownEgg'src={BrownEgg} alt='no-image' />
         <h1>Brown Egg Layer Chicken</h1>
         <p>A commercial layer purely for commercial egg production under controlled egg production infrastructure with formulated feeding regimes only.</p>
       </div>
      
       <div className='paragraph7'>
          <img className='Lohmann'src={Lohmann} alt='no-image' />
          <h1>Lohmann Brown</h1>
          <p>A popular and highly productive commercial breed of laying hens. These hens are specifically bred for their egg-laying abilities and are known for their exceptional egg production.</p>

       </div>
    </div>
  )
}

export default DayChickContent

