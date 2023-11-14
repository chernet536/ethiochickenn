import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../UserContext';
import JobDetail from './JobDetail';
import Footer from './Footer2';

function JobPagee() {
  const [jobPosts, setJobPosts] = useState([]);
  const { userInfo } = useContext(UserContext);

  const [newJobPost, setNewJobPost] = useState({ title: '', description: '', location: '' });

  const styles = {
    container: {
      marginLeft: '30px',
      marginRight: '30px',
      marginTop: '70px',
      height: '100%',
    },
    table: {
      width: '100%',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '10px',
      backgroundColor: '#f5f5f5',
      tableLayout: 'fixed',
    },
    tableHead: {
      backgroundColor: '#f5f5f5',
    },
    tableRow: {
      display: 'table-row',
    },
    tableCell: {
      display: 'table-cell',
      padding: '8px',
      borderBottom: '1px solid #ccc',
    },
    jobTitle: {
      fontWeight: 'bold',
      color: '#333',
    },
    jobLink: {
      textDecoration: 'none',
      color: '#333',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '6px 12px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    deleteButtonHover: {
      backgroundColor: '#c82333',
    },
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/api/job-posts`)
      .then((response) => response.json())
      .then((data) => setJobPosts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    setNewJobPost({ ...newJobPost, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_URL}/api/job-posts/${id}`, { method: 'DELETE' })
      .then(() => {
        const updatedJobPosts = jobPosts.filter((post) => post._id !== id);
        setJobPosts(updatedJobPosts);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
    <div style={{marginTop:'100px'}}></div>
      <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '-40px' }}>Currently Available Positions</h1>
      <div style={styles.container}>
        {jobPosts.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '50px' }}>There are currently no positions available.</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={styles.table}>
              <thead style={styles.tableHead}>
                <tr style={styles.tableRow}>
                  <th style={{ ...styles.tableCell, width: '30%' }}>Job Title</th>
                  <th style={{ ...styles.tableCell, width: '40%' }}>Description</th>
                  <th style={{ ...styles.tableCell, width: '20%' }}>Deadline</th>
                  <th style={{ ...styles.tableCell, width: '10%' }}></th>
                </tr>
              </thead>
              <tbody>
                {jobPosts.map((jobPost) => (
                  <tr style={styles.tableRow} key={jobPost._id}>
                    <td style={{ ...styles.tableCell, ...styles.jobTitle }}>
                      <Link style={styles.jobLink} to={`/JobDetail/${jobPost._id}`}>
                        {jobPost.title}
                      </Link>
                    </td>
                    <td style={styles.tableCell}>
                      <Link style={styles.jobLink} to={`/JobDetail/${jobPost._id}`}>
                        {jobPost.description}
                      </Link>
                    </td>
                    <td style={styles.tableCell}>
                      <Link style={styles.jobLink} to={`/JobDetail/${jobPost._id}`}>
                        {jobPost.location}
                      </Link>
                    </td>
                    {userInfo && userInfo.id && jobPost && userInfo.id === jobPost.author._id && (
                      <td style={styles.tableCell}>
                        <button
                          style={styles.deleteButton}
                          onClick={() => handleDelete(jobPost._id)}
                          onMouseOver={(e) => (e.target.style.backgroundColor = styles.deleteButtonHover.backgroundColor)}
                          onMouseOut={(e) => (e.target.style.backgroundColor =styles.deleteButton.backgroundColor)}
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
     <div style={{ marginTop: '530px' }}></div>
      </div>

      <Footer />
    </>
  );
}

export default JobPagee;
