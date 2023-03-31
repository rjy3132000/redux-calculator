import rootReducers from "./Reducers/index";
import { createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

let store = createStore(rootReducers,composeWithDevTools());

export default store;