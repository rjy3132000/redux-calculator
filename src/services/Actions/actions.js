import {LOAD_ANS, LOAD_BUTTON, LOAD_BACKSPACES, LOAD_CLEAR} from "../constants";

export let loadButton = (number) => {
    return {
        type:LOAD_BUTTON,
        payload:number
    }
}

export let loadAns = (number) => {
    return {
        type:LOAD_ANS,
        payload:number
    }
}


export let loadClear = (number) => {
    return {
        type:LOAD_CLEAR,
        payload:number
    }
}

export let loadBackSpace = (number) => {
    return {
        type:LOAD_BACKSPACES,
        payload:number
    }
}