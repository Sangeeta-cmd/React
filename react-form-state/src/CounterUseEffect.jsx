import {useState, useEffect} from "react"

export default function CounterUseEffect(){
    let [countx, setCountx] = useState(0)
    let [county, setCounty] = useState(0)

    let incCountx = ()=>{
        setCountx(currCount => currCount + 1)
    }

    let incCounty = ()=>{
        setCounty(currCount => currCount + 1)
    }

    useEffect(function printSomething(){
        console.log("this is side-effect!")
    },
    // [countx])  useEffect triggered when countx is rendered as it become the dependancy for this hook
    //[countx, county])  useEffect triggered when both countx and couty are rendered as it become the dependancy for this hook
    [])    //  useEffect triggered only for first time as empty array is passed as dependancy

    return(
        <div>
            <p>count = {countx} </p>
            <button onClick={incCountx}>+1</button>
            <br />
            <p>count = {county} </p>
            <button onClick={incCounty}>+1</button>
        </div>
    )
}