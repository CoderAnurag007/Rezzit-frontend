import React from "react";
import FollowersCard from "../followersCard/FollowersCard";
import Logosearch from "../logosearch/logosearch";
import Profilecard from "../Profilecard/profilecard";
import "./profileside.css";
const Profileside = () => {
  return (
    <div className="Profileside">
      <Logosearch />
      <Profilecard location={"homePage"} />
      <FollowersCard />
    </div>
  );
};

export default Profileside;
