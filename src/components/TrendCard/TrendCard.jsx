import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../Data/TrendData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      {TrendData.map((Trend, id) => {
        return (
          <div className="trend-item">
            <span>#{Trend.name}</span>
            <span>{Trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
