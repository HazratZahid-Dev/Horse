import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// =====================================
// signup requests
// =====================================
const SignUp = (data) => api.post("/user", data);
