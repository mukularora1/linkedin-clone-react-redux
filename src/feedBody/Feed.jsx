import React from "react";
import "./feed.css";
import PostEditor from "./PostEditor";
import FeedSort from "./FeedSort";
import FeedCard from "./FeedCard";

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
