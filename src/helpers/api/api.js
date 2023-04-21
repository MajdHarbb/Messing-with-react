import { axiosClient } from "../api/ApiClient";

export const api = {
  
  hello: () => {
    alert("hi");
  },
  login: (data) => {
    return axiosClient.post("/login", data);
  },
  signup: (data) => {
    return axiosClient.post("/signup", data);
  },
  logout: (data) => {
    return axiosClient.post("/logout", data);
  },
  userTodos: (data) => {
    return axiosClient.get("/todos-by-user");
  }
};