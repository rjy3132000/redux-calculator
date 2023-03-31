import {calculatorReducer,CALCULATOR_KEY} from "./reducers";
import {combineReducers} from "redux";


let rootReducers = combineReducers({
    [CALCULATOR_KEY]:calculatorReducer,
});

export default rootReducers;