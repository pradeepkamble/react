import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15)

  const addValue = ()=>{
    if(counter < 20) {
    counter = counter + 1;
    setCounter(counter);
    console.log(counter);
    }
  }

  const removeValue = ()=>{
    if (counter > 0) {
    counter = counter - 1;
    setCounter(counter);
    console.log(counter);
    }
  }

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={addValue}>ADD</button>
      <br/>
      <button onClick={removeValue}>REMOVE</button>

    </>
  )
}

export default App
