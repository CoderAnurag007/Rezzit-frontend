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
      </div>

      {location !== "profilePage" && (
        <span>
          <Link className="linktag" to={`/profile/${user._id}`}>
            My profile
          </Link>{" "}
        </span>
      )}

      <Link
        style={{
          display: location != "profilePage" && "none",
        }}
        className="linktag"
        to={`/`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        Home
      </Link>
    </div>
  );
};

export default Profilecard;
