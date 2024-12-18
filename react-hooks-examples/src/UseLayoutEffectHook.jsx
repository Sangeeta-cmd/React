/**
 * useLayoutEffect ==> this hook is invoked synchronously after all the DOM mutation complted and before the browser has painted the changes to the screen.
 * but in useEffect hook, it is called asynchronously.
 * This can be useful for reading layout from the DOM and synchronously re-rendering.
 */



import { useLayoutEffect, useRef, useEffect } from "react"

const UseLayoutEffectHook = ()=>{
    const divRef = useRef(null)

    useLayoutEffect(()=>{
        const { width, height } = divRef.current.getBoundingClientRect();
        console.log('Width:', width, 'Height:', height);

        divRef.current.style.backgroundColor = "green";

        return () => {
            divRef.current.style.backgroundColor = '';
          };

    }, [])

    return(
        <div ref={divRef} >
            hello Div!
        </div>
    )
}

export default UseLayoutEffectHook;