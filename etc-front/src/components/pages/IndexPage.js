import React, { useEffect, useState } from "react";
import Post from "../../../src/Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error retrieving posts:", error));
  }, []);

  return (
    <>
      <h1
        style={{
          fontSize: '35px',
          color: '#8a181b',
          textAlign: 'center',
          '@media (max-width: 768px)': {
            fontSize: '30px',
          },
          '@media (max-width: 480px)': {
            fontSize: '25px',
          },
          display: window.innerWidth < 820 ? 'none' : 'block',
        }}
      >
        Latest News
      </h1>
      <div
        style={{
          display: window.innerWidth < 820 ? 'none' : 'flex',
          flexWrap: 'wrap',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
          },
        }}
      >
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              style={{
                width: 'calc(33.33% - 10px)',
                margin: '5px',
                '@media (max-width: 768px)': {
                  width: '100%',
                  margin: '5px 0',
                },
              }}
            >
              <Post {...post} />
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </>
  );
}