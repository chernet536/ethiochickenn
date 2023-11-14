import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade, Zoom, Slide} from 'react-slideshow-image'
import image1 from '../../images/Feed2.jpg';
import image2 from '../../images/OurPurpose2.jpg';
import image3 from '../../images/ec1.jpg';



const slideImages = [
  {
    url : image2
  },
  {
    url : image1
  },
  {
    url: image3
  },
  
];

const divStyle = {
  marginTop:'80px',
  paddingTop:'40px',
  display: 'flex',
  alignItems:"center",
  justifyContent: "center",
  width: "100%",
  objectFit:"cover",
  height: "600px",
  backgroundSize: 'cover',
  overflow:"hidden",
  zIndex:'1'
}

const spanStyle = {
  overflow:'hidden',
  fontSize: "20px",
  background: "#efefef",
  color: "#000000"
}
function BasicSlider() {
  return (
    <div className='slide-container'>
       <Zoom duration={2000}>
         {slideImages.map((image, index) => (
           <div key={index}>
              <div style={{...divStyle, backgroundImage:`url(${image.url})`, transition:0.6}}>
                <span style={{spanStyle}}>{image.caption}</span>
              </div>
           </div>
         ))}
       </Zoom>
    </div>
  )
}

export default BasicSlider
