import React, { useContext, useState } from "react";
import "./Post.css";
// import { PostData } from "../../Data/PostData";
import PostCard from "../PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePosts } from "../../Actions/Postaction";
import axios from "axios";
import { RezzitContext } from "../../context/RezzitProvider";
// import TimeLineReducer from "../../Reducers/TimelineReducer";

const Post = () => {
  const [posts, setposts] = useState();
  // const { posts, loading } = useSelector((state) => state.PostReducer);
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const { uploading } = useSelector((state) => state.PostReducer);
  const { updated, setupdated } = useContext(RezzitContext);
  const getPosts = async () => {
    const fetchposts = await axios({
      method: "get",
      url: `https://rezzit-backend.onrender.com/post/${user._id}/timeline`,
    });
    const sortedData = fetchposts.data.reverse();
    setposts(sortedData);
  };

  useEffect(() => {
    getPosts();

    // dispatch(getTimelinePosts(user._id));
  }, [updated, uploading]);

  return (
    <div className="Post_container">
      {posts &&
        posts.map((post, id) => {
          return <PostCard data={post} user={user} key={id} />;
        })}
    </div>
  );
};

export default Post;
