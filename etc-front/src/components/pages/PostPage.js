import React, { useContext, useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import './PostPage.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../src/UserContext';
import Footer2 from './Footer2';

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, [id]);

  const deletePost = async (postId) => {
    const res = await fetch(`http://localhost:4000/post/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const deletedData = await res.json();
    console.log(deletedData);

    if (res.status === 422 || !deletedData) {
      console.log('error');
    } else {
      console.log('post deleted');
      alert('Post Deleted Successfully!');
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  if (!postInfo) return '';

  return (
    <>
      <div className='news-top-space'>
        <div className='news-height'></div>
      </div>
      <div className='news-page-content'>
        <h1>{postInfo.title}</h1>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div className='post-page-author'>by @{postInfo.author.username}</div>
        {userInfo.id === postInfo.author._id && (
          <div className='news-top-space2'>
            <Link className='newspage-edit-btn'to={`/edit/${postInfo._id}`}>
              <svg className = 'svg-content' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              Edit this post
            </Link>
            <button className='news-page-delete-btn' onClick={() => deletePost(postInfo._id)}>Delete Post</button>
          </div>
        )}
        <div className='newspage-image1'>
          <img className='newspage-image2' src={`http://localhost:4000/${postInfo.cover}`} alt="" />
        </div>
        <div className='newspage-content' dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
      <div className='bottom-space-giver' style={{marginBottom:'80px'}}></div>
      <Footer2 />
    </>
  );
}