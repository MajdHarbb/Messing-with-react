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
};
