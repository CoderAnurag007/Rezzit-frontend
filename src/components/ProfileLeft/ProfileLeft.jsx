import React from "react";
import FollowersCard from "../followersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";
import Logosearch from "../logosearch/logosearch";

const ProfileLeft = () => {
  return (
    <div className="Profileside">
      <Logosearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
