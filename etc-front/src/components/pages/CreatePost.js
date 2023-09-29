import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../../Editor";
import './CreatePost.css'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div style={{ marginTop: "20px" }}></div>
      <div className="topspace">
            <h1 className="create-news-post">Create Post</h1>
        </div>
      <form onSubmit={createNewPost} style={{ display: "flex", flexDirection: "column", maxWidth: "600px", margin: "0 auto" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          style={{ marginBottom: "10px", padding: "10px", fontSize: "18px" }}
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
          style={{ marginBottom: "10px", padding: "10px", fontSize: "18px" }}
        />
        <input type="file" onChange={(ev) => setFiles(ev.target.files)} style={{ marginBottom: "10px" }} />
        <Editor value={content} onChange={setContent} />

        <button style={{ marginTop: "10px", padding: "10px 20px", fontSize: "18px", backgroundColor: "#8a181b", color: "#fff", border: "none", borderRadius: "4px" }}>Create post</button>
      </form>
    </>
  );
}