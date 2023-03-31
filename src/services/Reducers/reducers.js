import { LOAD_ANS, LOAD_BUTTON, LOAD_BACKSPACES, LOAD_CLEAR } from "../constants";


export let CALCULATOR_KEY = "calculatorStore";

let initialState = {
    number: "",
    ans: "",
}

export let calculatorReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case LOAD_BUTTON:
            return {
                ...state,
                ...payload,
                number: state.number.concat(action.payload)
            }

        case LOAD_ANS:
            return {
                ...state,
                ...payload,
                ans: eval(state.number).toString() // eslint-disable-line
            }

        case LOAD_CLEAR:
            return {
                ...state,
                ...payload,
                number: "",
                ans: ""
            }

        case LOAD_BACKSPACES:
            return {
                ...state,
                ...payload,
                number: (state.number).slice(0, -1),
                ans: ""
            }

        default: return state;
    }
}

