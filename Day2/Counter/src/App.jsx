import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter]=useState(0)
  const addValue = () => {
    console.log('Button Clicked');
    Counter++;  
    if(Counter>10)Counter=10;  
    setCounter(Counter);
    setCounter(Counter);
    setCounter(Counter);
    setCounter(Counter);
    // all these setCounter calls are equivalent to a single setCounter call.Coz react treats all these as same and send them in a batch(only one).

  }
  const remValue = () => {
    console.log('Button Clicked'); 
    Counter--; 
    if(Counter<0)Counter=0;
    setCounter(Counter);
  } 

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter Value : {Counter}</h2>
      <button
      onClick={addValue} 
      >Add Value</button>
      <br />
      <button onClick={remValue}>Decrease Value</button>
    </>
  )
}

export default App
