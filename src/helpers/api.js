import { axiosClient } from "./ApiClient";
// export function getProduct(){
//     return axiosClient.get('/product');
// }

export function signin(data) {
  return axiosClient.post("/login", data);
}

export function register(data) {
  return axiosClient.post("/register", data);
}

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
