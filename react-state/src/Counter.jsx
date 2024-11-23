import { useState } from "react";

function init(){
    console.log("init called")
    return Math.random();
}

export default function Counter(){

    // let arr = useState(10)
    // console.log(arr)

    // let [count, setCount] = useState(0); // initialization
    console.log("component rendered/executed");
    // console.log(`count value : ${count}`)
 
    let [count, setCount] = useState(init);  // when we pass function like init() then every time that init() is executed to avoid that we use only reference of fun
 
    function inccount(){
        // setCount(count + 1)
        // console.log("inner count :", count);

        // setCount((curCount)=>{
        //     return curCount + 1;
        // })

        // setCount((curCount)=>{
        //     return curCount + 1;
        // })

        // setCount((curCount)=>{
        //     return curCount + 1;
        // })
        setCount(count + 1)

    }

    return(
        <>
            <h3>count = {count}</h3>
            <button onClick={inccount}>increse count</button>
        </>
    )
}