import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./LoadMoreBtn.css";
const LoadMoreBtn = ({ onClickLoadMore }) => {
  return (
    <div onClick={onClickLoadMore} className="load__moreWrapper">
      <div className="load__more">
        <p>Load more</p>
        <FaChevronDown />
      </div>
    </div>
  );
};

export default LoadMoreBtn;
