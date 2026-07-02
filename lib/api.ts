import axios from "axios";
import { getRestApiBaseUrl } from "@/lib/rest-api-base";

export const api = axios.create({
  baseURL: getRestApiBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
