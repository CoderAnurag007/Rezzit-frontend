import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { useState } from "react";
import ProfileModal from "../ProfileModel/Profilemodel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as UserApi from "../../api/UserApi";
import { Logout } from "../../Actions/Authaction";
const InfoCard = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileId = params.id;
  const [profileuser, setprofileuser] = useState({});
  const { user } = useSelector((state) => state.AuthReducer.authData);

  const handleLogOut = () => {
    // localStorage.clear();
    dispatch(Logout());
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (profileId === user._id) {
        setprofileuser(user);
      } else {
        const FetchedprofileUser = UserApi.getUser(profileId);
        setprofileuser(FetchedprofileUser);
      }
    };
    fetchUser();
  }, [user]);
  return (
    <div className="InfoCard">
      <div className="Infohead">
        <h4>Profile Info</h4>
        {user._id === profileId ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => {
                setmodalOpen(true);
              }}
            />
            <ProfileModal
              modalOpened={modalOpen}
              setmodalOpen={setmodalOpen}
              data={user}
            />
          </div>
        ) : (
          " "
        )}
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>{profileuser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>
          {profileuser.livesin} , {profileuser.country}
        </span>
      </div>
      <div className="info">
        <span>
          <b>Works At </b>
        </span>
        <span>{profileuser.workat}</span>
      </div>

      <button className="button logout_btn" onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
};

export default InfoCard;
