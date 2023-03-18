import Avatar from "../reusableComponent/Avatar";
import CommentLogo from '../assets/CommentLogo'
import RepostLogo from '../assets/RepostLogo'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import "./feedCard.css";

import React from "react";

function FeedCard() {
  return (
    <div className="feedCard">
      <div className="feedCard__top">
        <div className="feedCard__top__avatar">
          <Avatar width={"60px"} height={"60px"} />
        </div>
        <div className="feedCard__top__titleWrapper">
          <div className="feedCard__top__title">Mukul Arora</div>
          <div className="feedCard__top__subtitle">React | Vue js | Nodejs | Typescript</div>
          <div className="feedCard__top__timing">16min</div>
        </div>
        <div className="feedCard__top__optionBtn">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="feedCard__middle">
        <div className="feedCard__middle__blog"></div>
        <div className="feedCard__middle__img"></div>
        <div className="feedCard__middle__reaction"></div>
      </div>
      <div className="feedCard__bottom">
        <div className="feedCard__bottom__like">
          <div className="feedCard__bottom__icon">
            <ThumbUpOutlinedIcon />
          </div>
          <div className="feedCard__bottom__btnTitle">Like</div>
        </div>
        <div className="feedCard__bottom__comment">
        <div className="feedCard__bottom__icon">
            <CommentLogo />
          </div>
          <div className="feedCard__bottom__btnTitle">Comment</div>
        </div>
        <div className="feedCard__bottom__repost">
        <div className="feedCard__bottom__icon">
            <RepostLogo />
          </div>
          <div className="feedCard__bottom__btnTitle">Repost</div>
        </div>
        <div className="feedCard__bottom__share">
          <div className="feedCard__bottom__icon">
            <SendIcon />
          </div>
          <div className="feedCard__bottom__btnTitle">Share</div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
