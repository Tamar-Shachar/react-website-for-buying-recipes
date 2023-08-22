import { combineReducers } from "redux";
import cakesReducer from "./cakesReducer"
import shoppingCartReducer from "./shoppingCartReducer";
import dessertsReducer from "./dessertsReducer";
import cookiesAndsweetsReducer from "./cookiesAndsweetsReducer";
import breadsAndSaltyReducer from "./breadsAndSaltyReducer";
import wishlistReducer from "./wishlistReducer";
import customerReducer from "./customerReducer";
import loginModalReducer from "./loginModalReducer";
import shoppingModalReducer from "./shoppingModalReducer";
import bookReducer from "./bookReducer";
import advertisementModalReducer from "./advertisementModalReducer";
const allReducers = combineReducers({
    cakesReducer: cakesReducer,
    dessertsReducer: dessertsReducer,
    cookiesAndsweetsReducer: cookiesAndsweetsReducer,
    breadsAndSaltyReducer: breadsAndSaltyReducer,
    shoppingCartReducer: shoppingCartReducer,
    wishlistReducer: wishlistReducer,
    customerReducer: customerReducer,
    loginModalReducer: loginModalReducer,
    shoppingModalReducer: shoppingModalReducer,
    bookReducer: bookReducer,
    advertisementModalReducer: advertisementModalReducer,
});
export default allReducers;