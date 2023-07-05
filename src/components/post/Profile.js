import React from "react";
import VerifiedIcon from "../../assets/images/verified.svg";
import HeartIcon from "../../assets/images/heart.svg";
import CommentIcon from "../../assets/images/comment.svg";
import CounterIcon from "../CounterIcon";
const Profile = ({
  image,
  imageBg,
  name,
  verified,
  day,
  heigth,
  weight,
  comments,
  reply,
}) => {
  return (
    <div className={"com_profile"}>
      <img
        style={{ backgroundColor: imageBg }}
        className="profile_image"
        src={image}
        alt="Profile"
      />
      <div className="profile_info_wrapper">
        <div className="profile_name_wrapper">
          <p className="profile_name">{name}</p>
          {verified && <img src={VerifiedIcon} alt="Verified" />}
          <p className="com_m_0">
            <small className="profile_small_text">{day}</small>
          </p>
        </div>

        {heigth && weight && (
          <p className="com_m_0">
            <small className="height_weight">
              <span>{heigth}</span> - <span>{weight}</span>
            </small>
          </p>
        )}
        {comments && <p className="comment_text">{comments}</p>}
        <div className="impression_wrapper impression_wrapper_small">
          <CounterIcon icon={HeartIcon} count={5} small={true} />
          {!reply && <CounterIcon icon={CommentIcon} count={5} small={true} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
