import React from "react";
import Post from "../components/post/Post";
import ImageViewer from "../components/ImageViewer";
import ImpressionBar from "../components/ImpressionBar";
import Comments from "../components/Comments";
import BlankImage from "../assets/images/blankimage.svg";

const Content = () => {
  return (
    <div className="p_content">
      <div className="content_container">
        <Post />
      </div>
      <ImageViewer />
      <ImpressionBar />
      <Comments />
      <div className="input_wrapper">
        <img className="blank_icon" src={BlankImage} alt="Blank" />
        <input
          className="input_field"
          type="text"
          placeholder="댓글을 남겨주세요."
        />
        <p className="post_text">등록</p>
      </div>
    </div>
  );
};

export default Content;
