import * as MWLAPI from "../api/MWLRequest";

export const getLatestMWLData = (id) => async (dispatch) => {
  dispatch({ type: "MWL_STARTS" });
  try {
    const { data } = await MWLAPI.getLatestMWLData(id);

    console.log(data);

    dispatch({ type: "MWL_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "MWL_FAILS" });
  }
};
