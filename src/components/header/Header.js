import React from "react";
import ChevronLeft from "../../assets/images/leftarrow.svg";
import BellIcon from "../../assets/images/bell.svg";

const Header = () => {
  return (
    <div className="com_header">
      <div className="headbar">
        <img src={ChevronLeft} alt="Left Arrow" />
        <p className="title">자유톡</p>
        <img src={BellIcon} alt="Left Arrow" />
      </div>
    </div>
  );
};

export default Header;
