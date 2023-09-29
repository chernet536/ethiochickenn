import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Post({_id, title, summary, cover, content, createdAt, author}) {
  const userContext = useContext(UserContext);
  const { basename } = userContext || {};

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
        `}
      </style>
      <div
        className="post"
        style={{
          marginLeft: '48px',
          marginBottom: '-180px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '400px',
          width: '75%',
        }}
      >
        <div
          className="image"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '4px',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to={`${basename}/post/${_id}`}>
            <img
              style={{
                height: '200px',
                width: '350px',
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              }}
              src={'http://localhost:4000/' + cover}
              alt=""
            />
          </Link>
          {isHovered && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}
            >
              <Link
                to={`${basename}/post/${_id}`}
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  background: 'transparent',
                  border: '2px solid #fff',
                  borderRadius: '4px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                Read More
              </Link>
            </div>
          )}
        </div>
        <div
          className="texts"
          style={{ marginTop: '20px', textAlign: 'center' }}
        >
          <Link to={`${basename}/post/${_id}`} style={{ textDecoration: 'none' }}>
            <h2
              style={{
                color: '#8a181b',
                fontFamily: 'Poppins',
                fontWeight: 'bolder',
              }}
            >
              {title}
            </h2>
          </Link>
          <p className="info">
            <time
              style={{
                color: 'burgundy',
                fontFamily: 'Poppins',
                fontWeight: 'bolder',
              }}
            >
              {format(new Date(createdAt), 'MMM d, yyyy HH:mm')}
            </time>
          </p>
          <p
            className="summary"
            style={{
              color: 'burgundy',
              fontFamily: 'Poppins',
              fontStyle: 'italic',
              fontWeight: 'bolder',
            }}
          >
            {summary}
          </p>
        </div>
      </div>
    </>
  );
}