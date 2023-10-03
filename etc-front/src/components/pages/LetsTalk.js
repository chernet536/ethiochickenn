import React from 'react'
import { Link } from 'react-router-dom'
import './LetsTalk.css'
function LetsTalk() {
  return (
    <>
   
    <div  className='lets-talk3'>
    
    <div style={{marginTop:'-300px'}}className='lets-talk-content'>
      <p style={{fontSize:'16px',textAlign:'left',paddingLeft:'46px'}} className='lets'>LET'S TALK</p>
      <h1 style={{fontSize:'42px',textAlign:'left', paddingLeft:'15px', color:'#fff'}}>Need our products?</h1>
 
      <p style={{marginTop:'40px',fontSize:'16px', paddingLeft:'50px',marginBottom:'-30px'}} className='pro'>We’re a team of professionals who are excited to bring healthy and affordable eggs and meat to every Ethiopian family.</p>
     <Link to={'/sign-up'}>  <button class="contact-button">Contact</button></Link>
    </div>
    </div>
    </>
  )
}

export default LetsTalk
