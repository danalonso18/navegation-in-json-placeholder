import { combineReducers } from "redux";
import searchReducer from "./Reducers/searchReducers";

const rootReducer = combineReducers({
    search: searchReducer,
})

export default rootReducer;
