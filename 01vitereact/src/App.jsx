import Basic from "./basic"

function App() {
  const userName = "Sangeeta" 

  return (
    <>
      <h2>This is  heading {userName}</h2>     // within {}, we mention variables which are also called as "evaluated expressions"
      <Basic/>
      <p>This is 2nd para</p>
    </>
    // According to JSX, only one html element can be returned, so to return more elements we use div tag or empty 
    //tag and wrap any elements within it, so using empty tag(<></>) is called 'fragment'.
  )
}

export default App
