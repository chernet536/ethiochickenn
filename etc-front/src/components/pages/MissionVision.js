import React from 'react';
import single from '../../images/Artboard 5 copy 2.png';
import double from '../../images/Artboard 5 copy.png';
import triple from '../../images/Artboard 5 copy 3.png';

const cardContainerStyle = {
  width: '100%',
  height:'500px',
  padding: '10rem 4px',
  backgroundColor: '#8a181b',
  display: 'flex',
  justifyContent: 'space-between',
};

const cardStyle = {
  height:'326px',
  marginTop:'-70px',
  flex: '0 0 33%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#8a181b',
  padding: '1rem',
  borderRadius: '0.5rem',
  borderStyle: 'solid',
  borderColor:'#fcd302',
  transformOrigin: 'center',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.05)',
  },
};

const imageStyle = {
  width: '4rem',
  margin: '0 auto',
  marginTop: '-10rem',
  backgroundColor: 'transparent',
};
const imageStyle2 = {
    width: '4rem',
    margin: '0 auto',
    marginTop: '-14rem',
    backgroundColor: 'transparent',
  };

const titleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingTop: '2rem',
};

const priceStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
};

const featureStyle = {
  color:'#fff',
  textAlign: 'center',
  fontWeight: 'medium',
  paddingTop: '1rem',
  borderBottom: '1px solid',
  margin: '0 2rem',
  marginTop: '2rem',
};

const buttonStyle = {
  backgroundColor: '#00df9a',
  width: '200px',
  borderRadius: '0.375rem',
  fontWeight: 'medium',
  marginTop: '1.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingTop: '0.75rem',
  paddingBottom: '0.75rem',
  color: 'black',
};

const Cards = () => {
  return (
    <div style={cardContainerStyle}>
      <div style={cardStyle}>
        <img style={imageStyle} src={single} alt="/" />
      
        <div>
         
         
          <p style={featureStyle}>To bring healthy and affordable eggs and meat to every 
          Ethiopian family, and in doing so improve nutrition, enhance rural farmer livelihoods,
          and create income opportunities for our customers and partners.
          </p>
        </div>
      
      </div>
      <div style={cardStyle}>
        <img style={imageStyle2} src={double} alt="/" />
      
        <div>
          <p style={featureStyle}>To Provide one Chicken per person per year through smallholder farmers</p>
        </div>
       
      </div>
      <div style={cardStyle}>
        <img style={imageStyle2} src={triple} alt="/" />
      
         <div>
          <p style={featureStyle}>To Provide one Chicken per person per year through smallholder farmers</p>
         </div>
      </div>
    </div>
  );
};

export default Cards;