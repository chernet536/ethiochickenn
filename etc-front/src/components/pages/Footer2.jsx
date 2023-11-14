import React from 'react';
import ECLOGO2 from '../../images/EC_LOGO_2.png';
import LinkedIn from '../../images/Artboard 5 copy 7.png';
import Youtube from '../../images/Artboard 5 copy 6.png';
import Facebook from '../../images/Artboard 5 copy 5.png';
import Telegram from '../../images/Artboard 5 copy 4.png';
import './Footer2.css';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
function Footer2() {
  return (
    <>
    <div className="footer-content">
      <div className="logo">
        <div>
        <img src={ECLOGO2} style={{ marginTop: '35px', height: '120px', width: '120px' }} alt="eclogo" className="eclogo3" />
        </div>
        <p className='for-fulfilled-life'>For Fulfilled Life</p>
        
      </div>
      <div className="ContactUS">
          <h3 className='contact-us-text'>Contact us</h3>
          
            <div className='footer-location'>
              <CiLocationOn style={{ fontSize: '23px', color: '#fff', marginRight:'10px' }} />
              <p className='footer-par'><span className='content1'>Ethio China Street, Kadco Group</span> <span className='content2'>Building #2, 6th floor,</span> <span className="content3">Addis Ababa, Ethiopia</span></p>
            </div>
            <div className='footer-email'>
            <AiOutlineMail style={{ fontSize: '23px', color: '#fff', marginRight:'10px' }} />
               <p>info@ethiochicken.com</p>
            </div>
            <div className='footer-phone'>
            <BsTelephone style={{ fontSize: '23px', color: '#fff', marginRight:'10px' }} />
            <p>+251-116-67-22-29 <br></br>+251-944-16-83-59</p>
            </div>
      </div>
      <div className="Follow-us">
        <h3 className='follow-us-text'>Follow us</h3>
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
    </div>
    <div className="copyright">
    <p className='copy' style={{fontSize:'14px',paddingBottom:'20px', marginBottom:'0px', textAlign: 'center', backgroundColor:'#8a181b',color: '#fff'}}>© Copyright 2023. EthioChicken. All rights reserved</p>
    </div>
    </>
  );
}

export default Footer2;
