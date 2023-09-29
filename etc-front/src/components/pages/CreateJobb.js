import React, { useState, useEffect } from 'react';

function CreateJobb() {
  const [jobPosts, setJobPosts] = useState([]);
  const [newJobPost, setNewJobPost] = useState({ title: '', description: '', location: '', JobDetail: '' });

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '500px',
      width: '100%',
    },
    input: {
      marginBottom: '10px',
      padding: '8px',
      fontSize: '16px',
    },
    textarea: {
      marginBottom: '10px',
      padding: '8px',
      fontSize: '16px',
      minHeight: '100px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: "#8a181b",
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },

    // Mobile styles
    '@media (max-width: 600px)': {
      form: {
        maxWidth: '100%',
      },
      input: {
        fontSize: '14px',
      },
      textarea: {
        fontSize: '14px',
      },
      button: {
        fontSize: '14px',
      },
    },

    // Tablet styles
    '@media (min-width: 601px) and (max-width: 1024px)': {
      container: {
        padding: '40px',
      },
      form: {
        maxWidth: '80%',
      },
    },
  };

  useEffect(() => {
    fetch('http://localhost:4000/api/job-posts')
      .then(response => response.json())
      .then(data => setJobPosts(data))
      .catch(error => console.log(error));
  }, []);

  const handleInputChange = e => {
    setNewJobPost({ ...newJobPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:4000/api/job-posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJobPost),
      credentials: 'include', // Include this line to include credentials
    })
      .then(response => response.json())
      .then(data => {
        setJobPosts([...jobPosts, data]);
        setNewJobPost({ title: '', description: '', location: '', JobDetail: '' });
      })
      .catch(error => console.log(error));
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center' }}>Job Application Form</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="title"
          placeholder="Title"
          value={newJobPost.title}
          onChange={handleInputChange}
        />
        <input
          style={styles.input}
          type="text"
          name="description"
          placeholder="Description"
          value={newJobPost.description}
          onChange={handleInputChange}
        />
        <input
          style={styles.input}
          type="text"
          name="location"
          placeholder="Deadline"
          value={newJobPost.location}
          onChange={handleInputChange}
        />
        <p>Enter the Job detail Below</p>
        <textarea
          style={styles.textarea}
          name="JobDetail"
          rows={10}
          placeholder="Job Detail"
          value={newJobPost.JobDetail}
          onChange={handleInputChange}
        />
        <button style={styles.button} type="submit">
          Create Job Post
        </button>
      </form>
    </div>
  );
}

export default CreateJobb;