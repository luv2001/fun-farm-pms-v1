import { combineReducers } from "redux";
import { MWLReducer } from "./MWLReducer";
import { pHTDSReducer } from "./pHTDSReducer";

const reducers = combineReducers({
  mwl: MWLReducer,
  phTDS: pHTDSReducer,
});

export default reducers;
