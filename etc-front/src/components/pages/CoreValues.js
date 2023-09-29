import React from 'react'
import './CoreValues.css'
import Think from '../../images/ThinkLikeAnOwner.jpg';
import CustomerComes from '../../images/Customer Comes First (2).jpg';
import Discipline from '../../images/Discipline and Accountability (2).jpg';
import Strive from '../../images/Strive for excellence (2).jpg';
import OurPurpose from '../../images/OurPurpose.jpg';
import BestIdeas from '../../images/Best Idea Wins..jpg';
function CoreValues() {
  return (
    <div className='core-values'>
      <h1>CORE VALUES</h1>
      <div className='image-collection'>
         <div className='image1' data-text="We put the Customer at the center of our decisions and actions.">
             <img src={CustomerComes} alt='dayoldchick' className='core-images'/>
             <h3 style={{textAlign:'center'}}>The Customer always comes first</h3>
         </div>
         <div className='image2' data-text="We do what we say we are going to do and keep our commitments to each other.">
             <img src={Discipline} alt='dayoldchick' className='core-images' />
             <h3  style={{textAlign:'center'}}>Discipline and Accountability</h3>
        </div>
        <div className='image3' data-text="We run it like we own it">
             <img src={Think} alt='dayoldchick' className='core-images'/>
             <h3  style={{textAlign:'center'}}>Think Like and Owner</h3>
        </div>
      </div>
      <div className='image-collection'>
         <div className='image1' data-text="We strive to be the best in the world in everything we do.">
             <img src={Strive}  alt='dayoldchick' className='core-images' />
             <h3 style={{textAlign:'center'}}>Strive for excellence reject "Good enough"</h3>
         </div>
         <div className='image2' data-text="We are driven by a deep sense of purpose">
             <img src={OurPurpose}  alt='dayoldchick' className='core-images'/>
             <h3  style={{textAlign:'center'}}>Our Purpose Drives Us</h3>
        </div>
        <div className='image3'  data-text="We debate openly and allow the best ideas to win.">
             <img src={BestIdeas} alt='dayoldchick' className='core-images'/>
             <h3  style={{textAlign:'center'}}>Best ideas win</h3>
        </div>
      </div>
    </div>
  )
}

export default CoreValues
