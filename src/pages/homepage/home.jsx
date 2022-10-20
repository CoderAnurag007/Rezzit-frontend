import React from "react";
import "./home.css";
import Profileside from "../../components/profileside/profileside";
import PostSide from "../../components/Postside/PostSide";
import Rightside from "../../components/RightSide/Rightside";

const Home = () => {
  return (
    <div className="Home">
      <Profileside />
      <PostSide />
      <Rightside />
    </div>
  );
};

export default Home;
