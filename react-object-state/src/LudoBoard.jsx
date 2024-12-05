import { useState } from "react"

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue : 0, green: 0, yellow: 0, red:0})
    let [arr, setArr] = useState(["no moves"])

    let moveBlue = ()=>{
        console.log(`moves.blue = ${moves.blue}`)
        setMoves((prevMoves)=>{
            return ({...prevMoves, blue : prevMoves.blue + 1})
        })

        // setArr([...arr, "blue move"])
        setArr((prevArr)=>{
            return [...prevArr, "blue move"]
        })
        console.log(arr)
    }
    let moveYellow = ()=>{
        setMoves((prevMoves)=>{
            return ({...prevMoves, yellow : prevMoves.yellow + 1})
        })
    }
    let moveGreen = ()=>{
        setMoves((prevMoves)=>{
            return ({...prevMoves, green : prevMoves.green + 1})
        })
    }
    let moveRed = ()=>{
        setMoves((prevMoves)=>{
            return ({...prevMoves, red : prevMoves.red + 1})
        })
    }


    return(
        <div>
            <p>Game Begins</p>
            <p>{arr}</p>
            <p>Blue moves = {moves.blue} </p>
            <button onClick={moveBlue} style={{backgroundColor: "blue"}} >+1</button>
            <p>Yellow moves = {moves.yellow} </p>
            <button onClick={moveYellow} style={{backgroundColor: "yellow", color: "black"}}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button onClick={moveGreen} style={{backgroundColor: "green"}}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button onClick={moveRed} style={{backgroundColor: "red"}}>+1</button>
        </div>
    )
}