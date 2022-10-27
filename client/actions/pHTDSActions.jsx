import * as pHTDSAPI from "../api/pHTDSRequest";

export const getLatestpHTDS = (id) => async (dispatch) => {
  dispatch({ type: "pHTDS_STARTS" });
  try {
    const { data } = await pHTDSAPI.getLatestpHTDSData(id);

    console.log(data);

    dispatch({ type: "pHTDS_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "pHTDS_FAILS" });
  }
};
