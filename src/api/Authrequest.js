import axios from "axios";

const API = axios.create({
  baseURL: "https://rezzit-backend.onrender.com",
});

export const LoginRoute = (FormData) =>
  API.post("/auth/login", FormData, {
    headers: { "Content-Type": "application/json" },
  });
export const SignUpRoute = (FormData) => {
  console.log(FormData);
  return API.post("/auth/register", FormData, {
    headers: { "Content-Type": "application/json" },
  });
};
