import React from "react";
import "./profilecard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const server = process.env.REACT_APP_PUBLIC_FOLDER;

const Profilecard = ({ location }) => {
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const { posts } = useSelector((state) => state.PostReducer);
  console.log(user.following, " Following hai bhau");
  console.log(user, "CoverPicture hai bhai");
  useEffect(() => {
    console.log(user.following);
  }, [user.following]);
  return (
    <div className="Profilecard">
      <div className="ProfileImages">
        <img
          src={
            user.coverpicture
              ? server + user.coverpicture
              : server + "defaultCover.jpg"
          }
          alt=""
        />
        <img
          src={
            user.profilepicture
              ? server + user.profilepicture
              : server + "defaultProfile.png"
          }
          alt=""
        />
      </div>

      <div className="Profilename">
        <span>
          {user.firstname.charAt(0).toUpperCase() +
            user.firstname.slice(1) +
            " " +
            user.lastname.charAt(0).toUpperCase() +
            user.lastname.slice(1)}
        </span>
        <span>{user.workat ? user.workat : "write about yourself..."}</span>
      </div>
      <div className="Follow_status">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location !== "profilePage" && (
        <span>
          <Link className="linktag" to={`/profile/${user._id}`}>
            My profile
          </Link>{" "}
        </span>
      )}
    </div>
  );
};

export default Profilecard;
