import {useState} from "react"

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false)
    let [clickCounts, setClickCounts] = useState(0)

    let toggleLikeBtn = ()=>{
        setIsLiked(!isLiked)
        setClickCounts(clickCounts + 1)
        // console.log("icon clicked")
    }

    let likeStyle = {
        color: "red",
        fontSize: "18px"
    }

    return(
        <p onClick={toggleLikeBtn}>
            {/* {isLiked.toString()}                    boolean values are not directly displayed in React */}
            
            {
                (isLiked) ?  <i style={likeStyle} className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
            &nbsp;
            <span>Likes = {clickCounts}</span>
        </p>
    )
}