import {useState} from "react";
import Ticket from "./Ticket";
import Button from "./Button.jsx"
import { genTickets , sum} from "./hepler.js";

export default function Lottery({n, winningSum}){
    let [ticket, setTicket] = useState(genTickets(n))
    let isWinning = winningSum(ticket);

    let buyNewTicket = ()=>{
        setTicket(genTickets(n))
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br />          
            <Button action = {buyNewTicket}/>
            <h3>{isWinning && "Congratulations, You won!"}</h3>
        </div>
    )
}