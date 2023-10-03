import React from 'react';
import IndexPage from './IndexPage';
import './Marketing.css'
import DayChickContent from './DayChickContent';
import Footer from './Footer2';
export default function Marketing() {
  return (
    <>
      <div style={{marginTop:'-65px'}}></div>
      <h1 className='marketing'>Day Old Chicks</h1>
      <DayChickContent/>
      <div style={{marginTop:'100px'}}></div>
      <Footer />
    </>
  );
}
