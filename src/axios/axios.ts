import axios from "axios";
import { endpointUrl as baseURL } from "../../config.json";

export const axiosPrivate = axios.create({
  baseURL: baseURL,
});

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: baseURL,
});
