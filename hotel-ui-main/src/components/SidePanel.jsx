import React from "react";
import { Link } from "react-router";
import "../styling/components/sidePanel.scss";
import { IoHome } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdOutlineBedroomChild } from "react-icons/md";

function SidePanel({ selected }) {
  return (
    <div className="side-panel-container">
      <div className="top-container">
        <h1>QUẢN LÝ NHÀ TRỌ</h1>
        <h2>Xin chao, user</h2>
      </div>
      <nav className="bottom-container">
        <Link
          to="/home"
          className={selected == "home" ? "link active" : "link"}
        >
          <IoHome className="icon"></IoHome>Trang chủ
        </Link>
        <Link
          to="/rooms"
          className={selected == "room" ? "link active" : "link"}
        >
          <MdOutlineBedroomChild className="icon"></MdOutlineBedroomChild>Phòng
        </Link>
        <Link to="/service" className="link">
          <RiCustomerServiceFill className="icon"></RiCustomerServiceFill>Dịch
          vụ
        </Link>
      </nav>
    </div>
  );
}

export default SidePanel;
