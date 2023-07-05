import React from "react";

const CounterIcon = ({ icon, count, small }) => {
  return (
    <div className="count_icon_wrapper">
      <div className={small ? "count_icon_small" : "count_icon"}>
        <img src={icon} alt="impressions" />
      </div>
      {count && <p className={small ? "count_small" : "count"}>{count}</p>}
    </div>
  );
};

export default CounterIcon;
