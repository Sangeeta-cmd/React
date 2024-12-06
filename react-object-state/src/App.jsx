import './App.css'
import LudoBoard from "./LudoBoard.jsx"
import ToDoList from "./ToDoList.jsx"
import Lottery from "./LotteryGame/Lottery.jsx"
import {sum} from "./LotteryGame/hepler.js"

function App() {
  let winCondition = (ticket)=>{
    // return sum(ticket) === 15;      wiining condition when sum of all ticket numbers is ==> 15
    // return ticket.every((num) => num === ticket[0])   wiining condition all ticket numbers are equal (eg: 111, 222, ...)
    return ticket[0] === 0;        //wiining condition when the first ticket numbers is ==> 0
  }

  return (
    <>
      <Lottery n = {3}  winningSum = {winCondition} />  {/** passing function as props value */}
    </>
  )
}

export default App
