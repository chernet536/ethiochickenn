import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateJobPage() {
  const [jobPost, setJobPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/api/job-posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobPost),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update job post");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Job post updated:", data);
        navigate(`/job-detail/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!jobPost) {
    return <div>Loading...</div>;
  }

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "0 1rem",
  };

  const cardStyle = {
    padding: "2rem",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f9fa",
    maxWidth: "500px",
    width: "100%",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    marginBottom: "1rem",
    padding: "0.5rem",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#8a181b",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    marginTop: "1rem",
  };

  // Media queries
  const mediaQuerySmall = "@media (max-width: 576px)";
  const mediaQueryMedium = "@media (min-width: 577px) and (max-width: 992px)";
  const mediaQueryLarge = "@media (min-width: 993px)";

  return (
    <div style={{ ...containerStyle }}>
      <div style={{ ...cardStyle }}>
        <h1 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Update Job</h1>
        <form style={{ ...formStyle }} onSubmit={handleSubmit}>
          <div>
            <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }} htmlFor="title">
              Title:
            </label>
            <input
              style={{ ...inputStyle }}
              type="text"
              id="title"
              name="title"
              value={jobPost.title}
              onChange={(e) => setJobPost({ ...jobPost, title: e.target.value })}
            />
          </div>
          <div>
            <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }} htmlFor="description">
              Description:
            </label>
            <input
              style={{ ...inputStyle }}
              type="text"
              id="description"
              name="description"
              value={jobPost.description}
              onChange={(e) => setJobPost({ ...jobPost, description: e.target.value })}
            />
          </div>
          <div>
            <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }} htmlFor="location">
              Location:
            </label>
            <input
              style={{ ...inputStyle }}
              type="text"
              id="location"
              name="location"
              value={jobPost.location}
              onChange={(e) => setJobPost({ ...jobPost, location: e.target.value })}
            />
          </div>
          <div>
            <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }} htmlFor="jobDetail">
              Job Detail:
            </label>
            <textarea
            style={{ ...inputStyle, minHeight: "300px", minWidth: "435px"  }}
            id="jobDetail"
            name="jobDetail"
            value={jobPost.JobDetail}
            onChange={(e) => setJobPost({ ...jobPost, JobDetail: e.target.value })}
          ></textarea>
        </div>
        <button style={{ ...buttonStyle }} type="submit">
          Update Job
        </button>
      </form>
    </div>

    
    </div>
  );
}