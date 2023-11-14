import Post from "./Post";
import Footer from './Footer2';
import { useEffect, useState } from "react";
import './NewsPage.css'; // Import the external CSS file

export default function NewsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/newspost`).then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
    <div style={{marginTop:'100px'}}></div>
      <div className="news-page">
        <h1>News Archive</h1>
      </div>
      <div className="top-space"></div>

      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
      
      <div className="footer-space"></div>
      <Footer />
    </>
  );
}
