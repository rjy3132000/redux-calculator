import React from "react";
import "../assets/style.css";
import { useSelector } from "react-redux";
import {CALCULATOR_KEY} from "../services/Reducers/reducers";

function Display() {

  let cal = useSelector((state)=> {
    return state[CALCULATOR_KEY]
  })

  return (
    <div className="display">
      <h1>Calculator App</h1>
      <div className="form-group input">
        <input type={"text"}
        value={(cal.ans).length === 0 ? cal.number: cal.ans } readOnly/>
      </div>
    </div>
  );
}

export default Display;
