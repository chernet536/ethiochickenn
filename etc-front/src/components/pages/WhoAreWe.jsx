import React from 'react';
import './WhoAreWe.css'
function WhoAreWe() {
  return (
    <div
      className='who-main'
      style={{
        marginTop:'-140px',
        marginBottom:'10px',
        marginLeft:'auto',
        marginRight:'auto',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh',
        '@media (max-width: 768px)': {
          width: '90%',
          marginTop: '0',
          height: 'auto'
        },
        '@media (max-width: 480px)': {
          width: '100%',
          marginTop: '0',
          height: 'auto',
          padding: '10px'
        }
      }}
    >
      <h1 style={{ color: '#8a181b' }}>About US</h1>
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
