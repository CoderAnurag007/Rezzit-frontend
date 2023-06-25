import React from "react";
import FollowersCard from "../followersCard/FollowersCard";
import Logosearch from "../logosearch/logosearch";
import Profilecard from "../Profilecard/profilecard";
import "./profileside.css";
const Profileside = () => {
  return (
    <div className="Profileside">
      <Profilecard location={"homePage"} />
    </div>
  );
};

export default Profileside;
