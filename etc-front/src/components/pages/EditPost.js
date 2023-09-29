import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../../Editor";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/post/" + id)
      .then((response) => {
        response.json().then((postInfo) => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);

    if (files?.[0]) {
      data.set("file", files?.[0]);
    }

    const response = await fetch("http://localhost:4000/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <>
      <div>
        <div className="topspace">
            <h1>Edit Post</h1>
        </div>
      </div>

      <form onSubmit={updatePost} style={{ display: "flex", flexDirection: "column", maxWidth: "600px", margin: "0 auto" }}>
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

        <button style={{ marginTop: "10px", padding: "10px 20px", fontSize: "18px", backgroundColor: "#8a181b", color: "#fff", border: "none", borderRadius: "4px" }}>Edit post</button>
      </form>
    </>
  );
}