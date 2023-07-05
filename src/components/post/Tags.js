import React from "react";

const tagList = [
  { title: "#2023" },
  { title: "#TODAYISMONDAY" },
  { title: "#TOP" },
  { title: "#POPS!" },
  { title: "#WOW" },
  { title: "#ROW" },
];

const Tags = () => {
  return (
    <ul className="com_tags">
      {tagList.map((item, index) => (
        <li className="tag_item">{item.title}</li>
      ))}
    </ul>
  );
};

export default Tags;
