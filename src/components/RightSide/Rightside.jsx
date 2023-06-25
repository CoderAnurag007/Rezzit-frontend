import React from "react";
import "./RightSide.css";
import Home from "../../img/home.gif";
import Comment from "../../img/comment.png";
import Noti from "../../img/noti.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import { useState } from "react";
// import ShareModel from "../ShareModal/ShareModel";
import ShareModel from "../shareModal/ShareModel";
import { Link } from "react-router-dom";

const Rightside = () => {
  const [modalOpen, setmodalOpen] = useState(false);

  return (
    <div className="RightSide">
      <TrendCard />

      <ShareModel modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
    </div>
  );
};

export default Rightside;
