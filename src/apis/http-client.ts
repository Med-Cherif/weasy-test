// "use server";

import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://fakestoreapi.com",
});

httpClient.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
