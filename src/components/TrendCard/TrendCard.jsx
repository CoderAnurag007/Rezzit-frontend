import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../Data/TrendData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      {/* <img src="/profile.jpeg" alt="profile" /> */}
      <div className="img"></div>
      <h3>Anurag Singh</h3>
      <a href="https://dreamy-haupia-dae211.netlify.app/" target="_blank">
        Portfolio Link
      </a>
      <p>
        Hello! I'm a passionate Full Stack Developer and Computer Science
        Engineer. I create innovative solutions, spanning front-end and back-end
        development. With strong problem-solving skills and attention to detail,
        I deliver high-quality code. Let's connect and explore the possibilities
        together!
      </p>
    </div>
  );
};

export default TrendCard;
