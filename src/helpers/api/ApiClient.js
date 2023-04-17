import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `http://127.0.0.1:8000/api/auth`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  function (error) {
    let res = error.response;
    if (res.status == 401) {
      // window.location.href = `http://127.0.0.1:8000/`;
    }
    if (res.status === 404) {
      console.log("The requested resource does not exist or has been deleted");
    }
    if (res.status === 401) {
      console.log("Please login to access this resource");
    }
    console.error(`Looks like there was a problem. Status Code: ` + res.status);
    return Promise.reject(error);
  }
);
