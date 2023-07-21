import axios from "axios";
import { CYPERMOVIE_URL, TOKEN_CYPERSOFT } from "../Constant";
import { store } from "..";
import { batLoading, tatLoading } from "../redux/spinnerSlice";

export let https = axios.create({
  baseURL: CYPERMOVIE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYPERSOFT,
  },
});
// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    console.log("đi");
    console.log(config);
    store.dispatch(batLoading());
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    console.log("zề");
    store.dispatch(tatLoading());
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log("zề");
    store.dispatch(tatLoading());
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
