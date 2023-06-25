import axios from "axios";

const API = axios.create({
  baseURL: "https://rezzit-backend.onrender.com",
});

export const uploadImageRoute = (data) => API.post("/upload/", data);
export const uploadPostRoute = (data) => API.post("/post/createpost", data);
