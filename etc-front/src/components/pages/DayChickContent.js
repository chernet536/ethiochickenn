import React from 'react'
import './DayChickContent.css';
import sasso from '../../images/sasso3.jpg';
import Lohmann from '../../images/extra-brown-cage2.jpg';
import BrownEgg from '../../images/bovans-brown4.jpg';
function DayChickContent() {
  return (
    <>
    <div className='day-chick-explain'>
      <h1>Day Old Chicks</h1>
      <p> We provide a diverse range of day-old chicks. Our commitment to quality begins with <br></br> meticulous breeding and extends to rigorous grading, selection, vaccination, and biosecurity protocols <br></br> to ensure our customers are 100% satisfied.</p>
    </div>
    <div className='container8'>
       <div className='paragraph5'>
         <img className='sasso'src={sasso} alt='no-image' />
          <h1 className='sasso-title'>Sasso T451</h1>
          <p>Dual purpose chicken that can be used for both egg and meat production under scavenger/supplement feeding environments</p>
       </div>
       <div className='paragraph6'>
         <img className='BrownEgg'src={BrownEgg} alt='no-image' />
         <h1 className='Brown-title'>Brown Egg Layer Chicken</h1>
         <p>A commercial egg layer chicken which performs best under commercial poultry farming conditions with complete feeding</p>
       </div>
      
      
    </div>
    </>
  )
}

export default DayChickContent
