import { createStore } from "redux";
import allReducers from "./reducers";

const projectStore = createStore(
    allReducers
);
projectStore.getState()
export default projectStore;
