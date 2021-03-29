import axios from "axios";

const api = axios.create({
  baseURLhttp: "//localhost:3333/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
