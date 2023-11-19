/*
일반 json 객체 axios
@author 조혜안
@since 2023.11.20
*/
import axios from "axios";

function Instance() {
  const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return http;
}

export const http = Instance();
