import React from 'react';

const MapComponent = () => {
  return (
    <>
    <div className='container'>
    <h1 className={{marginLeft:'300px',textAlign:'center',color:'#8a181b'}}>Our Location</h1>
    </div>
  
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ethiochicken, Addis Ababa&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://gachanymph.com/">Gacha Nymph</a>
      </div>
      <style>
        {`
        .mapouter {
          margin-bottom:-200px;
          position: relative;
          text-align: right;
          width: 100%;
          height: 800px;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none!important;
          width: 100%;
          height: 600px;
        }
        .gmap_iframe {
          width: 100%!important;
          height: 800px!important;
        }
        `}
      </style>
    </div>

    </>
  );
};

export default MapComponent;