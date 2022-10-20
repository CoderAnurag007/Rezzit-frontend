import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../Actions/userAction";

const User = ({ person }) => {
  const server = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const [following, setfollowing] = useState(
    person.followers.includes(user._id)
  );

  const handleFollow = () => {
    if (following) {
      dispatch(unfollowUser(person._id, user));
      // console.log(person._id, user);
    } else {
      dispatch(followUser(person._id, user));
      // console.log(person._id, user);
    }

    setfollowing((prev) => !prev);
  };

  return (
    <div className="follower">
      <div>
        <img
          src={
            person.profilepicture
              ? server + person.profilepicture
              : server + "defaultProfile.png"
          }
          alt=""
          className="followerimg"
        />
      </div>
      <div className="name">
        <span>{person.firstname + " " + person.lastname}</span>
        <span>{person.username}</span>
      </div>
      <button className="button fc_btn" onClick={handleFollow}>
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
