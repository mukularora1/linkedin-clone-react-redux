import React from "react";
import JobLogo from "../assets/JobLogo";
import PhotoLogo from "../assets/PhotoLogo";
import VideoLogo from "../assets/VideoLogo";
import WriteArticleLogo from "../assets/WriteArticleLogo";
import Avatar from "../reusableComponent/Avatar";
import "./posteditor.css";

const options = [
  {
    component: <PhotoLogo height="24px" width="24px" />,
    title: "Photo",
  },
  {
    component: <VideoLogo height="24px" width="24px" />,
    title: "Video",
  },
  {
    component: (
      <JobLogo height="24px" width="24px" fillColor="var(--color-brand)" />
    ),
    title: "Jobs",
  },
  {
    component: <WriteArticleLogo height="24px" width="24px" />,
    title: "Write article",
  },
];
function PostEditor() {
  return (
    <div className="postEditor xy--center flex-direction-column">
      <div className="postEditor__upper">
        <div className="postEditor__upper__avatar">
          <Avatar width={"50px"} height={"50px"} />
        </div>
        <div className="postEditor__upper__inputBoxContainer">
          <input
            type="text"
            className="postEditor__upper__inputBox"
            placeholder="Start a post"
          />
        </div>
      </div>
      <div className="postEditor__lower">
        {options.map((el, index) => (
          <div
            className="postEditor__lower__item button--hover-cursor"
            key={index}
          >
            <div>{el.component}</div>
            <h3>{el.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostEditor;
