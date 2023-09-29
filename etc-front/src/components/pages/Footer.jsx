import React from 'react'
import ECLOGO2 from '../../images/EC_LOGO_1.jpg'
import './Footer.css';
function Footer() {
  return (
    <div>
      <div className='Footer-row'>
        <div className='image'>
        <img src={ECLOGO2} style={{marginTop:'15px', height:'300px', width:'300px'}} alt='eclogo' className='eclogo'/>
        </div>
        <div className='quick-links'>
            <p style={{color:'gold'}}>Quick Links</p>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact US</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="JobList">Career</a></li>
            <li><a href="">Testimonials</a></li>
            
        </div>
        <div className='more-info'>
            <p style={{color:'gold'}}>More Info</p>
            <li><a href="">Day Old Chicks</a></li>
            <li><a href="/consulting">Feed</a></li>
            <li><a href="/newspage">News</a></li>
          
        </div>
        
      </div>
      <p style={{paddingBottom:'20px',textAlign: 'center', backgroundColor:'#8a181b',color: '#fff'}}>© Copyright 2023. EthioChicken. All rights reserved</p>
    </div>
  )
}

export default Footer
