/**
 * useRef hook ===> storing the reference of DOM element or stores mutable / previus values. 
 * it is used to directly access the DOM elements and changing this value will not trigger the re-rending
 */

import { useRef } from 'react';

export default function UseRefHook() {
    // const inputFocus = useRef(null)              

    // const showFocus = ()=>{
    //     inputFocus.current.focus();           // accessing input element directly 
    //     inputFocus.current.style.backgroundColor = 'red';    
    // }

    // return(
    //    <div>
    //      <input type="text" placeholder="type here..." ref={inputFocus} />
    //      <br />
    //      <button onClick={showFocus} >Focus Input</button>
    //    </div>
    // )


    // example - 2 ==> storing mutable previous value without re-rendering
    const timerRef = useRef(null);

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            console.log('Timer is running...');
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
    };

    return (
        <div>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
}