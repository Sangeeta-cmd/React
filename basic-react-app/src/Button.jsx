function handleClick(event){
    console.log(event)
    console.log("Hello!")
}

function handleMouseOver(){
    console.log("Bye!")
}

function handleDoubleClick(){
    console.log("you double clicked!")
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick} >Click me!</button>
            <p onMouseOver={handleMouseOver} >This is paragraph event</p>      { /*non-click event */}
            <button onDoubleClick={handleDoubleClick}>double click me!</button>
        </div>
    )
}