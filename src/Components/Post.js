import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

export default function Post({ username, description, imageURL }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        ></Avatar>
        {/* Header*/}
        <h2> {username}</h2>
      </div>

      {/* image */}
      <img className="post_image" src={imageURL} />

      {/* username + description */}
      <h4 className="post_description">
        <strong>{username}</strong> {description}
      </h4>
    </div>
  );
}
