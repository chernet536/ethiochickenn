import React from 'react';
import './WhoAreWe.css'
function WhoAreWe() {
  return (
    <div
      className='who-main'
    >
      <h1 className='about-us-title'>ABOUT US</h1>
      <hr
        style={{
          width: '100%',
          marginBottom: '20px',
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '1px'
        }}
      />
      <p style={{ fontWeight:'lighter',marginBottom: '20px' }}>
         EthioChicken stands as one of the leading poultry companies in East Africa. <br></br>
         The company specializes in producing and delivering improved breeds of day-old chickens 
         (DOCs) <br></br> and blended poultry feed to its customers.
      </p>
    </div>
  );
}

export default WhoAreWe;
