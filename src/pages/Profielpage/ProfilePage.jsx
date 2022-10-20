import React from "react";
import PostSide from "../../components/Postside/PostSide";
import Profilecard from "../../components/Profilecard/profilecard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import Rightside from "../../components/RightSide/Rightside";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="ProfilePage">
      <ProfileLeft />
      <div className="ProfileCenter">
        <Profilecard location={"profilePage"} />
        <PostSide />
      </div>
      <Rightside />
    </div>
  );
};

export default ProfilePage;
