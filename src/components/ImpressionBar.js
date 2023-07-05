import React from "react";
import HeartIcon from "../assets/images/heart.svg";
import CommentIcon from "../assets/images/comment.svg";
import SaveIcon from "../assets/images/save.svg";
import ThreeDots from "../assets/images/threedot.svg";
import CounterIcon from "./CounterIcon";

const ImpressionBar = () => {
  return (
    <div className="impression_container">
      <div className="impression_wrapper">
        <CounterIcon icon={HeartIcon} count={5} />
        <CounterIcon icon={CommentIcon} count={5} />
        <CounterIcon icon={SaveIcon} />
        <CounterIcon icon={ThreeDots} />
      </div>
    </div>
  );
};

export default ImpressionBar;
