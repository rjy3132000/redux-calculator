import React from 'react';
import {useDispatch} from "react-redux";
import { loadAns, loadBackSpace, loadButton, loadClear } from "../services/Actions/actions";


function Keypad() {
  let dispatch = useDispatch();

  return (
    <div className="keypad">

      <button onClick={()=> dispatch(loadClear())} className="bg-change">AC</button>
      <button onClick={()=> dispatch(loadBackSpace())} className="bg-change">C</button>
      <button onClick={()=> dispatch(loadButton("/"))} className="bg">/</button>
      <button onClick={()=> dispatch(loadButton("+"))} className="bg">+</button>

      <button onClick={()=> dispatch(loadButton(9))}>7</button>
      <button onClick={()=> dispatch(loadButton(8))}>8</button>
      <button onClick={()=> dispatch(loadButton(7))}>9</button>
      <button onClick={()=> dispatch(loadButton("-"))} className="bg">-</button>

      <button onClick={()=> dispatch(loadButton(6))}>6</button>
      <button onClick={()=> dispatch(loadButton(5))}>5</button>
      <button onClick={()=> dispatch(loadButton(4))}>4</button>
      <button onClick={()=> dispatch(loadButton("*"))} className="bg">*</button>

      <button onClick={()=> dispatch(loadButton(1))}>1</button>
      <button onClick={()=> dispatch(loadButton(2))}>2</button>
      <button onClick={()=> dispatch(loadButton(3))}>3</button>
      <button onClick={()=> dispatch(loadButton("%"))} className="bg">%</button>

      <button onClick={()=> dispatch(loadButton("00"))}>00</button>
      <button onClick={()=> dispatch(loadButton(0))}>0</button>
      <button onClick={()=> dispatch(loadButton("."))}>.</button>
      <button onClick={()=> dispatch(loadAns())} className="bg-change">=</button>
    </div>
  )
}

export default Keypad;