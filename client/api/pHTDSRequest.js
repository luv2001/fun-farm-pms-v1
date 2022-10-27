import axios from "axios";

// const IP = "192.168.43.75";
// const url = `http://${IP}:4000/api/v1/pms`; // Testing URL

const url = `https://fun-farmhouse.herokuapp.com/api/v1/pms`; // Testing URL

const API = axios.create({
  baseURL: `${url}`,
});

export const getLatestpHTDSData = (id) =>
  API.get(`/getLatestpHTDSData?id=${id}`);
