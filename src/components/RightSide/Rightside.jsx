import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Comment from "../../img/comment.png";
import Noti from "../../img/noti.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import { useState } from "react";
import ShareModel from "../shareModal/shareModel";
import { Link } from "react-router-dom";

const Rightside = () => {
  const [modalOpen, setmodalOpen] = useState(false);

  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to={"/home"}>
          <img src={Home} alt="" />
        </Link>
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />
      <button
        className="button r-button"
        onClick={() => {
          console.log("Hello");
          setmodalOpen(true);
        }}
      >
        Share
      </button>
      <ShareModel modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
    </div>
  );
};

export default Rightside;
