import React from 'react'
import WhoAreWe2 from './WhoAreWe2'
import AboutText from './AboutText'
import MissionVision2 from './MissionVision2'
import CoreValues from './CoreValues'
import OurPartners from './OurPartners'
import Teams from './Teams'
import LetsTalk from './LetsTalk'
import Footer from './Footer2'

function AboutUsPage() {
  return (
    <>
       <div style={{marginTop:'80px'}}></div>
      <WhoAreWe2 />
      <div style={{marginTop:'50px'}}></div>
      <MissionVision2 />
      <CoreValues />
      <OurPartners />
      <Teams/>
    {/*<LetsTalk />*/}
      <div style={{marginTop:'50px'}}></div>
      <Footer />
    </>
  )
}

export default AboutUsPage
