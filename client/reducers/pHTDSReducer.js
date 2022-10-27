export const pHTDSReducer = (
  state = {
    pHTDSData: null,
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "pHTDS_STARTS":
      return { ...state, loading: true, error: false };

    case "pHTDS_SUCCESS":
      return {
        ...state,
        pHTDSData: action.payload,
        loading: false,
        error: false,
      };

    case "pHTDS_FAILS":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
