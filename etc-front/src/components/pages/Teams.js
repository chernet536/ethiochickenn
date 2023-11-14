import React from 'react'
import './Teams.css'
import Justin from '../../images/Justin.jpg';
import Joseph from '../../images/Joseph.jpg';
import Mulugeta from '../../images/Mulugeta.jpg';
import Makeda from '../../images/Makeda.jpg';
import Sean from '../../images/Sean.jpg';
import DR_Fikresilassie from '../../images/Fikreselassie.jpg';
import Yonatan from '../../images/Yonatan.jpg';
import DR_Mulualem from '../../images/Mulualem.jpg';
function Teams() {
  return (
    <div className='Teams'>
    <h1 style={{textAlign:'center', marginTop:'30px'}}>OUR TEAM</h1>
    <div className='image-collection2'>
       <div className='image7' data-text="">
           <img src={Justin} alt='dayoldchick' className='teams-images'/>
           <h3 style={{}}>Dr. Justin Benade</h3>
           <p>Managing Director</p>
       </div>
       <div className='image8' data-text="">
           <img src={Joseph} alt='dayoldchick' className='teams-images'/>
           <h3  style={{}}>Mr. Joseph Chivinge</h3>
           <p>Finance Director</p>
      </div>
      <div className='image9' data-text="">
           <img src={Mulugeta} alt='dayoldchick' className='teams-images' />
           <h3  style={{}}>Mr. Mulugeta Abrha</h3>
           <p>Exports Director</p>
      </div>
    </div>
    <div className='image-collection2'>
       <div className='image7' data-text="">
           <img src={DR_Mulualem} alt='dayoldchick' className='teams-images'/>
           <h3 style={{}}>Dr. Mulualem Tesfaye</h3>
           <p>Sales and Marketing Director</p>
       </div>
       <div className='image8' data-text="">
           <img src={DR_Fikresilassie} alt='dayoldchick' className='teams-images' />
           <h3  style={{}}>Dr. Fikresilassie Dawit</h3>
           <p>Production Director</p>
      </div>
      <div className='image9'  data-text="">
           <img src={Yonatan} alt='dayoldchick' className='teams-images'/>
           <h3  style={{}}>Mr. Yonatan Fseha</h3>
           <p>Human Resources Director</p>
      </div>
    </div>
    <div className='image-collection2'>
       <div className='image7' data-text="">
           <img src={Makeda} alt='dayoldchick' className='teams-images'/>
           <h3 style={{}}>Ms. Makeda Mekonnen</h3>
           <p>Chief of Staff</p>
       </div>
       <div className='image8' data-text="">
           <img src={Sean} alt='dayoldchick' className='teams-images' />
           <h3  style={{}}>Mr. Sean Moran</h3>
           <p>Supply Chain and Logistics Director</p>
      </div>
      
    </div>
   
  </div>
  )
}

export default Teams
