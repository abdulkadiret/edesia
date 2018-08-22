import axios from "axios";

const API_URL = process.env.REACT_APP_API_URI || "http://localhost:4000";

const instance = axios.create ({
  baseURL: API_URL
});

export const getUsers = () => {
  return instance.get("/api/users").then(res => res.json());
};

export const updateUser =() => {
  return instance.put("/api/users/:user_id").then(res => res.json());
}
export const getDelivers = () => {};
