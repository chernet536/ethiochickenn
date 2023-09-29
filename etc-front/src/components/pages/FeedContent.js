import React from 'react'
import './FeedContent.css';
function FeedContent() {
  return (
    <>
    <div className='Poultry-Feed'>
      <h2 className='Poultry-title'>Poultry Feed</h2>
      <p>We provide a full range of formulated poultry feed from the best quality ingredients. In addition, our customized poultry diets address each breed's specific needs to ensure optimum health, growth, and overall quality during the different stages of growth or requirement. Our main products are:</p>
    </div>
    <div className='container'>
      <div className='paragraph1'>
         <h1 className='starter'>Starter</h1>
         <p>Commercial Starter feed is a high protein chicken feed prepared to meet the dietary requirements of day-old chicks. The layer or dual-purpose chicken should be fed starter feed for the first six weeks of their life before progressing onto grower feed. The high protein content helps young chicks grow fast becoming good pullets.</p> 
      </div>
      <div className='paragraph2'>
         <h1 className='grower'>Grower</h1>
         <p>Commercial Grower feed is designed to fulfill the dietary requirements of a chicken between the ages of 6 to 20 weeks. Grower feed contains a protein content between 16-18% but has less calcium than regular layer feed.</p> 
      </div>
      <div className='paragraph3'>
         <h1 className='layer'>Layer</h1>
         <p>Commercial layer feed contains a balance of protein, calcium, and other vitamins and minerals that encourage consistent egg-laying abilities in the flock. Layer feed has extra calcium to ensure that the eggshells are strong leading to less breakages. Layer feed should only be fed to chickens from 20 weeks of age or once they have started to lay eggs. Before the start of feeding layer feed, mix half layer and half grower feed from week 16 till the point of lay, then switch to 100%-layer feed.
</p> 
      </div>
    </div>
    </>
  )
}

export default FeedContent
