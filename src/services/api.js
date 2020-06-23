import axios from "axios";

const api = axios.create({
  //baseURL: "http://192.168.100.75:3333", //Casa
  baseURL: "http://192.168.50.39:3333",    //Rocket
});

export default api;
