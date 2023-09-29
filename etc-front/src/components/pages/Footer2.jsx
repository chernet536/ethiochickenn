import React from 'react';
import ECLOGO2 from '../../images/EC_LOGO_2.png';
import LinkedIn from '../../images/Artboard 5 copy 7.png';
import Youtube from '../../images/Artboard 5 copy 6.png';
import Facebook from '../../images/Artboard 5 copy 5.png';
import Telegram from '../../images/Artboard 5 copy 4.png';
import './Footer2.css';
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineYoutube } from 'react-icons/ai';

function Footer2() {
  return (
    <>
    <div className="footer-content">
      <div className="logo">
        <img src={ECLOGO2} style={{ marginTop: '35px', height: '120px', width: '120px' }} alt="eclogo" className="eclogo3" />
        <p>We’re a team of professionals who are excited to bring healthy and affordable eggs and meat to every Ethiopian family.</p>
        <div className="social-media-icons">
              <a href="https://www.linkedin.com/company/ethiochicken/">
                  <img src={LinkedIn} style={{ marginTop: '15px', height: '30px', width: '30px' }} alt="eclogo" className="eclogo" />  
              </a>
               <a href="https://www.youtube.com/@ethiochicken4263">
                  <img src={Youtube} style={{ marginTop: '15px', height: '30px', width: '30px' }} alt="eclogo" className="eclogo" />
               </a>
               <a href="https://www.facebook.com/forfulfilledlife/">
                  <img src={Facebook} style={{ marginTop: '15px', height: '30px', width: '30px' }} alt="eclogo" className="eclogo" />
               </a>
               <a href="https://t.me/s/forfulfilledlife">
                  <img src={Telegram} style={{ marginTop: '15px', height: '30px', width: '30px' }} alt="eclogo" className="eclogo" />
               </a>
        </div>
      </div>
      <div className="QuickAndUseful">
        <div className="QuickLinks">
         <h2>Quick Links</h2>
          <li className='home-link'><a href="/">Home</a></li>
          <li className='home-link'><a href="/marketing">Our Products</a></li>
          <li className='home-link'><a href="/aboutuspage">About US</a></li>
        </div>
        <div className="UsefulLinks">
            <h2>Useful Links</h2>
          <li className='home-link'><a href="/ourstrategy">Our Strategy</a></li>
          <li className='home-link'><a href="/newspage">News</a></li>
          <li className='home-link'><a href="/JobList">Career</a></li>
        </div>
      </div>
      <div className="ContactUS">
        <h2>Contact-US</h2>
        <p>Ethio China Street, Kadco Group Building #2, 6th floor, Addis Ababa Ethiopia</p>
        <p>info@ethiochicken.com</p>
        <p>+251-116-67-22-29 <br></br>+251-944-16-83-59</p>
      </div>
    </div>
    <div className="copyright">
    <p className='copy' style={{paddingBottom:'20px',textAlign: 'center', backgroundColor:'#8a181b',color: '#fff'}}>© Copyright 2023. EthioChicken. All rights reserved</p>
    </div>
    </>
  );
}

export default Footer2;