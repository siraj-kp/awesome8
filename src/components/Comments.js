import React from "react";
import Profile from "./post/Profile";
import ProfileImage from "../assets/images/profile.png";
import ProfileRepImage from "../assets/images/profilerep.png";

import ThreeDots from "../assets/images/threedot.svg";
import CounterIcon from "./CounterIcon";

const Comments = () => {
  return (
    <div className="com_comments">
      <div className="comment_profile_wrapper">
        <Profile
          image={ProfileImage}
          imageBg="#ffdca9"
          name="안녕 나 응애"
          verified={true}
          day="1일전"
          comments={`어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 
          우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
          아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
          괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
          꼭 봐주세용~!`}
        />
        <CounterIcon icon={ThreeDots} />
      </div>
      <div className="reply_profile_wrapper ">
        <Profile
          image={ProfileRepImage}
          imageBg="#FBB0AE"
          name="ㅇㅅㅇ"
          verified={false}
          day="1일전"
          comments={`오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다`}
          reply={true}
        />
        <CounterIcon icon={ThreeDots} />
      </div>
    </div>
  );
};

export default Comments;
