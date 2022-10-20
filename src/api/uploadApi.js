import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const uploadImageRoute = (data) => API.post("/upload/", data);
export const uploadPostRoute = (data) => API.post("/post/createpost", data);
