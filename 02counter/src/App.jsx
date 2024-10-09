import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);      // hook === variable 
  // let counter = 5;
  function addValue(){
    // counter = counter + 1;
    if(counter < 20){
      setCounter((preCounter) => preCounter + 1)    // or setCounter((preCounter) => { return preCounter + 1})
      setCounter((preCounter) =>  preCounter + 1)
      setCounter((preCounter) =>  preCounter + 1)
     
    }
    
  }

  const removeValue = ()=>{
    if(counter > 0 ){
      setCounter(counter - 1);
    }
    
  }

  
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter} </h2>

      <button
      onClick = {addValue}>Add Value {counter} </button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter} </button>
    </>
  )
}

export default App
