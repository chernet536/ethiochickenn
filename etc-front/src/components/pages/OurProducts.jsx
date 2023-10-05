import React from 'react';
import DayOldChick from '../../images/Chick_1.jpg';
import Feed from '../../images/Feed2.jpg';
import './OurProducts.css'; // Make sure to provide the correct path to the CSS file

function OurProducts() {
  return (
    <div className='main-product'>
      <h1 style={{textAlign:'center'}}>OUR PRODUCTS</h1>
      <div className='product-images'>
        <div className='img-container'>
          <img src={DayOldChick} alt='dayoldchick' className='dayoldchick' />
          <div className='Day-old-chicks-back'>
             <h1 className='Day-old-text'>Day Old Chicks</h1>
          </div>
        </div>
        <div className='img-container'>
          <img src={Feed} alt='feed' className='feed' />
          <div className='feed-back'>
            <h1 className='feed-text'>Feed</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
