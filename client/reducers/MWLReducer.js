export const MWLReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      return action.data;

    case "SEND_DATA":
      return state;

    default:
      return state;
  }
};
