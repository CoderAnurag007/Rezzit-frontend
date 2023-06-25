import axios from "axios";

const API = axios.create({
  baseURL: "https://rezzit-backend.onrender.com",
});

export const getTimelinePostsRoute = (id) => API.get(`/post/${id}/timeline`);
export const LikePost = (id, userId) =>
  API.put(`post/${id}/likepost`, { userId: userId });
