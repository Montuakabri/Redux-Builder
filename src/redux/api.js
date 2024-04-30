import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001", // JSON Server port
  headers: {
    "Content-Type": "application/json",
  },
});
