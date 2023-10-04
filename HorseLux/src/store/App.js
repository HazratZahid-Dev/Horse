import axios from "axios";
import { baseUrl } from "../config/BaseUrl";
const token = localStorage.getItem("token");
export const jsonUrl = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const formUrl = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "/*/",
    "Content-Type": "application/forms",
    Authorization: "token",
  },
});
