import axios from "axios";

const default_header = {
  "Content-Type": "application/json",
};
//const key = process.env.REACT_APP_KCISA_API_KEY
export const kcisaApi = axios.create({
  baseURL: "http://api.kcisa.kr/openapi/API_TOU_050/request",
  headers: default_header,
});
