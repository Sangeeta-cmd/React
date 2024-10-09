import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <p>hello</p>
    </div>
  )
  
}

// const reactElement = {
//   type: 'a',
//   props :{
//       href : 'https://www.google.com',
//       target : '_blank'
//   },
//   children :'Click me to visit google'
// }


const anotherElemnt = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "Pratham"

const reactElement = React.createElement(
  'a',
  {href :'https://google.com', target : '_blank'},
  'Click to visit me',
  anotherUser
)

const reactElement2 = React.createElement(
  'h2',
  {},
  'heading 2', 
  anotherUser,
  reactElement
)


ReactDOM.createRoot(document.getElementById('root')).
render(
  MyApp()
  // anotherElemnt
  // reactElement
  // reactElement2
  // <App/>
)
