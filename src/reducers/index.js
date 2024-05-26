import { combineReducers } from "redux";
import beneficiary from "./beneficiary";



const rootReducer = combineReducers({
  beneficiary,
  // Combine other reducers here
});

export default rootReducer;
