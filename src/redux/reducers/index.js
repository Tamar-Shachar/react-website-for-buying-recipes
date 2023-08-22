import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import custumerReducer from "./custumerReducer";
import productsReducer from "./productsReducer"
const allReducers = combineReducers({
    bookReducer: bookReducer,
    custumerReducer: custumerReducer,
    productsReducer: productsReducer,
});
export default allReducers;