import React from 'react'
import "./assets/style.css"
import Display from "./container/DisplayContainer";
import Keypad from "./container/KeypadContainer";

function App() {
  return (
    <section className='calculator'>
      <div className='wrapper'>
      <Display />
      <Keypad />
     </div>
    </section>
  )
}

export default App;