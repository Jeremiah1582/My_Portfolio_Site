import react from "react";
import axios from "axios"

export const setAuthToken = (token) => {
    console.log("setAuthToken..,", token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
};


export const useRefreshToken =()=>{
  
}
// example 2 
