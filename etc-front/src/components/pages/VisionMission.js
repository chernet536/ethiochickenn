import React from 'react'
import './VisionMission.css'
function VisionMission() {
  return (
    <div className='vision-image-container'>
      <div style={{marginTop:'-60px'}}className='vision-mission'>
        <h1 className='VisionTitle'>VISION</h1>
        <p style={{paddingLeft:'10px',fontSize:'16px', color:'#8a181b'}}>To provide one chicken per person per year through smallholder farmers.</p>
        <h1 className='MissionTitle'>MISSION</h1>
        <p style={{paddingLeft:'10px', fontSize:'16px', color:'#8a181b'}}>To bring healthy and affordable eggs and meat to every Ethiopian family, and in doing so 
          improve nutrition, enhance rural farmer livelihoods, and create income opportunities for our customers and partners.
           </p>
           <h1 className='MissionTitle'>PURPOSE</h1>
        <p style={{paddingLeft:'10px', fontSize:'16px', color:'#8a181b'}}>
        Making the farmers of Ethiopia healthier and wealthier
           </p>
      </div>
    </div>
  )
}

export default VisionMission
