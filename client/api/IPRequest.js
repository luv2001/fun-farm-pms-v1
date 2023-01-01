import axios from "axios";

const IP = "192.168.4.1";
// const url = `http://${IP}:4000/api/v1/pms`; // Testing URL

const url = `http://${IP}`; // Testing URL

const API = axios.create({
  baseURL: `${url}`,
});

export const IPfuncitons = async (name) => {
  API.get(`/${name}`);
};
