import React from "react";
import "./PostCard.css";
import Heart from "../../img/like.png";
import Notlike from "../../img/notlike.png";
import Share from "../../img/share.png";
import Comment from "../../img/comment.png";
import { useState } from "react";
import { LikePost } from "../../api/Postapi";

const PostCard = (props) => {
  const { data, user } = props;
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setlikes] = useState(data.likes.length);

  const handleLike = async () => {
    setLiked((prev) => !prev);
    LikePost(data._id, user._id);

    liked ? setlikes((prev) => prev - 1) : setlikes((prev) => prev + 1);
  };

  return (
    <div className="postCard">
      {data.image && (
        <img
          src={
            data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""
          }
          alt=""
        />
      )}
      <div className="postReact">
        <img src={liked ? Heart : Notlike} alt="" onClick={handleLike} />
        <img src={Share} alt="" />
        <img src={Comment} alt="" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "14px" }}>
        {likes} Likes
      </span>
      <div className="detail">
        <span>
          <b>{user.firstname + " " + user.lastname} </b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default PostCard;
