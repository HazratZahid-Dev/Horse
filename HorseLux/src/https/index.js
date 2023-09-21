import axios from "axios";

export const api = axios.create({
  baseURL: "https://hurseluxprojectupdate-production.up.railway.app",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// =====================================
// signup requests
// =====================================
export const callSignUp = (data) => api.post("/user", data);
