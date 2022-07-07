import axios from "axios";
const service = axios.create({
  baseURL: process.env,
  timeout: 5000
})

export default service