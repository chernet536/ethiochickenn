import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import { UserContextProvider } from './UserContext';
import Home from './components/pages/Home';
import BasicSlider from './components/pages/BasicSlider';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import NewsPage from './components/pages/NewsPage';
import NewsPostPage from './components/pages/NewsPostPage';
import PostPage from './components/pages/PostPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import CreatePost from './components/pages/CreatePost';
import EditPost from './components/pages/EditPost';
import CreateJobb from './components/pages/CreateJobb';
import JobPagee from './components/pages/JobPagee';
import JobDetail from './components/pages/JobDetail';
import AboutUsPage from './components/pages/AboutUsPage';
import UpdateJobPage from './components/pages/UpdateJobPage';
import OurStrategy from './components/pages/OurStrategy';

function App() {
  return (
       <UserContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aboutuspage' element={<AboutUsPage/>} />
        <Route path='/ourstrategy' element={<OurStrategy/>} />
        <Route path='/newspage' element={<NewsPage/>} />
        <Route path='/newspage/post/:id' element={<NewsPostPage/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/JobList" element={<JobPagee />}/> 
        <Route path="/update-job/:id" element={<UpdateJobPage />}/>
        <Route path="/JobDetail/:id" element={<JobDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path='/CreateJobb' element={<CreateJobb/>}/>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/login" element={<LoginPage />}/> 
        <Route path='/register' element={<RegisterPage />} /> 
        <Route path='/create' element={<CreatePost />} /> 
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
     </UserContextProvider>
  );
}

export default App;