import React from "react";
import Profile from "./Profile";
import Tags from "./Tags";
import ProfileImage from "../../assets/images/profile.png";

const Post = () => {
  return (
    <div className="com_post">
      <div className="profile_wrapper">
        <Profile
          image={ProfileImage}
          imageBg="#ffdca9"
          name="안녕 나 응애"
          verified={true}
          day="1일전"
          heigth="165cm"
          weight="53kg"
        />
        <button className="profile_button">팔로우</button>
      </div>
      <p className="post_title">
        지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
      </p>
      <div className="post_content">
        <p className="content_text">
          지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시
          어떤 상품이 제일 괜찮았어?
        </p>
        <p className="content_text">
          후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일
          재밌었다던데 맞아???
        </p>

        <p className="content_text">
          올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌
          사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던
          팝들 있으면 어땠는지 후기 좀 공유해주라~~!
        </p>
      </div>
      <Tags />
    </div>
  );
};

export default Post;
