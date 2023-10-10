import React, {useState} from 'react'
import CountUp from 'react-countup';
import './Grow.css'
import ScrollTrigger from 'react-scroll-trigger';
function Grow() {
 const [counterOn, setCounterOn] = useState(false);
   return (
    <>
    
    
    
        
     
         <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className='test8' style={{
            
            background:'white',
          
           
            color: '#8a181b',
           
        }}>
            <div className='test2b '>
            <div className='test2a'>
            
                <h1 className='counter-title'>
             {/* I  {' '}  */}  
                {counterOn && <CountUp start={0} end={12} duration={2} delay={0}/>}
                   <sup style={{fontSize:'25px'}}>+</sup>
                </h1>
                <h1 style={{marginTop:'-3px',fontSize:'16px'}}>Sites</h1>
            </div>
            <div className='test2a'>
             
             <h1 className='counter-title'>
              {/* I  {' '}  */}
                {counterOn && <CountUp start={0} end={10} duration={2} delay={0}/>}
                K
                <sup style={{fontSize:'25px'}}>+</sup>
             </h1>
             <h1 style={{marginTop:'-3px',fontSize:'16px'}}>Agents</h1>
         </div>
         <div className='test2a'>
             
             <h1 className='counter-title'>
            {/* I  {' '}  */}
                {counterOn && <CountUp start={0} end={1500} duration={2} delay={0}/>}
                <sup style={{fontSize:'25px'}}>+</sup>
             </h1>
             <h1 style={{marginTop:'-3px',fontSize:'16px'}}>Employees</h1>
         </div>
         <div className='test2a'>
             
             <h1 className='counter-title'>
             {/* I  {' '}  */}
                {counterOn && <CountUp start={0} end={1} duration={2} delay={0}/>}
               M <sup style={{fontSize:'25px'}}></sup>
             </h1>
             <h1 style={{marginTop:'-3px',fontSize:'16px'}}>Farmers</h1>
         </div>
            </div>
            
            </div>
    </ScrollTrigger>
      
 
    </>
  )
}

export default Grow
