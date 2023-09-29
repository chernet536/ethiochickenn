import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { UserContext } from "../../UserContext";

export default function JobDetail() {
  const [jobPost, setJobPost] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/job-posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch job detail");
        }
        return response.json();
      })
      .then((data) => {
        setJobPost(data);
        console.log(data); // Log the received data
      })
      .catch((error) => {
        console.log(error);
        setJobPost(null);
      });
  }, [id]);

  if (!jobPost) {
    // Add inline styling for the loading message
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "18px",
        }}
      >
        Loading...
      </div>
    );
  }

  const jobDetailStyle = {
    whiteSpace: "pre-line",
    marginLeft: "20px",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#8a181b",
    marginBottom: "10px",
  };

  const updateButtonStyle = {
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "#8a181b",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const isUserLoggedIn = userInfo && userInfo.id;
  const isUserJobPostAuthor = isUserLoggedIn && userInfo.id === jobPost.author._id;

  return (
    <>
      <div className="topspace"></div>
      <h1
        style={{
          color: "#8a181b",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        Job Detail
      </h1>
      <div style={jobDetailStyle}>
        <h2 style={titleStyle}>{jobPost.title}</h2>
        <p>{jobPost.JobDetail}</p>
        {isUserJobPostAuthor && (
          <Link to={`/update-job/${id}`} style={updateButtonStyle}>
            Update
          </Link>
        )}
      </div>
    </>
  );
}