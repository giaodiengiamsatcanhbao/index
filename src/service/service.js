import axios from "axios";
export const instance = axios.create({
  baseURL: 'http://34.124.218.193:8084/api/v1',
  timeout: 30000
});