export const MWLReducer = (
  state = {
    MWLData: null,
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "MWL_STARTS":
      return { ...state, loading: true, error: false };

    case "MWL_SUCCESS":
      return {
        ...state,
        MWLData: action.payload,
        loading: false,
        error: false,
      };

    case "MWL_FAILS":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
