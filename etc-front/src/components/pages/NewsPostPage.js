import React, { useContext, useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import { UserContext } from '../../../src/UserContext';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Footer2 from './Footer2';

export default function NewsPostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo, basename } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${basename}/newspost/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, [basename, id]);

  const deletePost = async (id) => {
    const res2 = await fetch(`${basename}/post/${postInfo._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("post deleted");
      alert("Post Deleted Successfully!");
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  if (!postInfo) return '';

  return (
    <>
      <div className="newss"></div>
      <div className='topspace'></div>
      <div style={{ maxWidth: '1100px', marginLeft: '300px', marginRight: '300px', color: '#8a181b', fontFamily: `Ubuntu` }} className="post-page">
        <h1>{postInfo.title}</h1>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div className="author">by @{postInfo.author.username}</div>
        {userInfo.id === postInfo.author._id && (
          <div className="edit-row">
            <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              Edit this post
            </Link>
            <button className="delete-btn" onClick={() => deletePost(postInfo._id)}>Delete Post</button>
          </div>
        )}
        <div className="image">
          <img src={`${basename}/${postInfo.cover}`} alt="" />
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
      <Footer2 />
    </>
  );
}