import React from "react";
import "./feed.css";
import FeedCard from "./FeedCard";
import FeedSort from "./FeedSort";
import PostEditor from "./PostEditor";

function Feed() {
  return (
    <div className="feedBody">
      <div className="feedBody__top">
        <PostEditor />
      </div>
      <div className="feedBody__middle">
        <FeedSort />
      </div>
      <div className="feedBody__bottom">
        <FeedCard />
      </div>
    </div>
  );
}

export default Feed;
