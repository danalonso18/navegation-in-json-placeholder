import { combineReducers } from "redux";
import searchReducer from "./reducers/searchReducers";

const rootReducer = combineReducers({
    search: searchReducer,
})

export default rootReducer;