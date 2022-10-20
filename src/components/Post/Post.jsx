import React from "react";
import "./Post.css";
// import { PostData } from "../../Data/PostData";
import PostCard from "../PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePosts } from "../../Actions/Postaction";
// import TimeLineReducer from "../../Reducers/TimelineReducer";

const Post = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.PostReducer);
  const { user } = useSelector((state) => state.AuthReducer.authData);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  const newposts = posts.filter((post) => post.userId === user._id);
  console.log(newposts, "new post bhai");
  return (
    <div className="Post_container">
      {loading
        ? "Fetching Posts..."
        : newposts.map((post, id) => {
            return <PostCard data={post} user={user} key={id} />;
          })}
    </div>
  );
};

export default Post;
