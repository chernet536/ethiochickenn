import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({ _id, title, summary, cover, createdAt, author }) {
  return (
    <div className="posts">
      <div className="news-image">
        <Link to={`/post/${_id}`}>
          <img className="imagess" src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      <div className="textss">
        <Link className="news-title-remove" to={`/post/${_id}`}>
          <h2 className="news-title">{title}</h2>
        </Link>
        <p className="news-info">
          <a className="news-author">{author.username}</a>
          <time className="news-time">{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time>
        </p>
        <p className="news-summary">{summary}</p>
      </div>
    </div>
  );
}