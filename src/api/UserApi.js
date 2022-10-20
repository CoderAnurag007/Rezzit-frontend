import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getUser = (id) => API.get(`/user/${id}`);

export const updateUserRoute = (id, formdata) =>
  API.put(`/user/${id}`, formdata);

export const getAllUser = () => {
  return API.get("/user");
};

export const followUserRoute = (id, data) =>
  API.put(`/user/${id}/follow`, data);

export const unfollowUserRoute = (id, data) =>
  API.put(`/user/${id}/unfollow`, data);
