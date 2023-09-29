//import '../App.css';
//import '../components/Style.css'
import BasicSlider from '../components/BasicSlider';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Grow from '../components/Grow';
import Eggs from '../components/Eggs';
import Teams from '../components/Teams';
import Navbarr from '../components/Navbarr';
import Footer from '../components/Footer';
import IndexPage from './IndexPage';

import { UserContextProvider } from '../UserContext';
import NewsArchive from '../components/NewsArchive';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <UserContextProvider>
    <div className="">

        <Navbar />
        
       <div className='topspace'>

       </div>
     
       <BasicSlider />
       <div className='topspace'>

       </div>
       <Products />
       <div className='topspace'>

       </div>
  
       <div className='topspace'>
        
       </div>
    
       <div className='topspace'>
        
       </div>
       
       <Eggs />
       <div className='topspace'>
        
        </div>
        <NewsArchive />
       <IndexPage  />
       <button style={{color: 'white', backgroundColor: '#8a181b', padding: '10px 20px', border: 'none', borderRadius: '4px', fontFamily: 'Poppins', fontSize: '16px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', transition: 'background-color 0.3s ease' }}>View More</button>
       <Link  style={{ fontWeight:'bold', textDecoration: 'none', color: '#8a181b', float:'right', marginRight:'240px'}} to="/newspage">See all News</Link>
       <div className='topspace'>

       </div>
       <Teams />
       <div className='topspace'>

       </div>
       <Footer />
    </div>
    </UserContextProvider>
  );
}

export default HomePage;

