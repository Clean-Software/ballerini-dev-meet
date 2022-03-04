import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dev-meet-backend.herokuapp.com/",
});

export { apiClient as api };
