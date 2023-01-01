import * as IPAPI from "../api/IPRequest";

export const IPFunctions = (name) => async (dispatch) => {
  try {
    const data = await IPAPI.IPfuncitons(name);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
