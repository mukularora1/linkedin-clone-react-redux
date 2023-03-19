import React from "react";
import AvatarImage from "../assets/avatar.jpeg";
import "./avatar.css";
function Avatar({ width, height }) {
  return (
    <div className="avatar xy--center" style={{ width: width, height: height }}>
      <img src={AvatarImage} alt="avatar" className="avatar__img" />
    </div>
  );
}

export default Avatar;
