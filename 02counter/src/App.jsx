import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15;

  function addClick(){
    if(counter<20){
      counter = counter + 1;
      setCounter(counter);
    }
    console.log(counter);
  }

  function removeClick(){
    if(counter>0){
      counter = counter - 1;
    setCounter(counter);
    }
    console.log(counter);
  }

  let [counter, setCounter] = useState(0)

  return (
    <>
      <button onClick={addClick}>Up Counter {counter}</button>
      <br />
      <button onClick={removeClick}>Down Counter {counter}</button>
    </>
  )
}

export default App
