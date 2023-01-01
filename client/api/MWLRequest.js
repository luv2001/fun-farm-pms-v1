import axios from "axios";

// const IP = "192.168.43.75";
// const url = `http://${IP}:4000/api/v1/pms`; // Testing URL

const url = `https://beige-gharial-garb.cyclic.app/api/v1/pms`; // Testing URL

const API = axios.create({
  baseURL: `${url}`,
});

export const getLatestMWLData = async (id) =>
  API.get(`/getLatestMWLdata?id=${id}`);
