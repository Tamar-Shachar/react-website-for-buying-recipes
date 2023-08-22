import { createStore } from "redux";
import allReducers from "./reducers";
import { applyMiddleware } from "redux";
import  {apiReqestMiddleware} from "./middleware/apiReqestMiddleware";
const store = createStore(
    allReducers,
    applyMiddleware(apiReqestMiddleware)
);
store.getState()
export default store;
