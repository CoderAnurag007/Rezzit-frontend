import React from "react";
import "./FollowersCard.css";
import { FollowersData } from "../../Data/Data";
import User from "../User/User";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserApi";

const FollowersCard = () => {
  const [persons, setpersons] = useState([]);
  const { user } = useSelector((state) => state.AuthReducer.authData);
  console.log(user);

  useEffect(() => {
    const fetchpersons = async () => {
      const users = await getAllUser();
      setpersons(users.data);
      console.log(users, " from follower card");
    };
    fetchpersons();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;
