import './App.css'
import Title from './Title.jsx'
import ProductTab from "./ProductTab.jsx"
import MsgBox from "./MsgBox.jsx"

// function Title(){                                // title component 
//   return <h1>This is a Title!</h1>;
// }

// function Description(){
//   return <p>This is description.</p>;
// }

function App() {   // app component
  return (
    <>
      <MsgBox userName = "Sangeeta" textColor = "blue" /> 
      <ProductTab />
    </>
  )
  
}

export default App
