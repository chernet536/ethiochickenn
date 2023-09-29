import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



export default function EditJob({ match }) {
  const jobId = match.params.id;
  const [jobData, setJobData] = useState({ title: '', description: '', location: '' });

  useEffect(() => {
    // Fetch the specific job data using the jobId
    fetchJobData(jobId);
  }, [jobId]);

  const fetchJobData = async (jobId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/job-posts/${jobId}`);
      const data = await response.json();
      setJobData(data);
    } catch (error) {
      console.log('Error fetching job data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send updated job data to the server for updating
      await fetch(`http://localhost:4000/api/job-posts/${jobId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      // Redirect to job details page after successful update
      // You can customize the redirect as needed
      // For example, you can use history.push(`/jobs/${jobId}`) if you have access to the history object
    } catch (error) {
      console.log('Error updating job:', error);
    }
  };

  return (
    <div>
      <h2>Edit Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={jobData.title} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={jobData.description} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={jobData.location} onChange={handleInputChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

