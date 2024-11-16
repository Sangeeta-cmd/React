// function MsgBox({userName, textColor}) {
//     const style = {backgroundColor : textColor}

//     return(
//       <h2 style={style}>Hi, I am {userName}</h2>
//     )
// }

// export default MsgBox;


export default function MsgBox({userName, textColor}){
    
    return(
        <h2 style={{color : textColor}}>Hi, I am {userName}</h2>
    )
}

