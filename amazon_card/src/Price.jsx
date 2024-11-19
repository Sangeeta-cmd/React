export default function Price({oldPrice, newPrice}){
    let oldStyle = {
        textDecorationLine : "line-through"
    }
    let newStyle = {
        fontWeight : "bold"
    }

    let boxStyle = {
        backgroundColor : "#e0c367",
        width: "250px",
        height: "27px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        paddingTop: "5px"
    }

    return (
        <div style={boxStyle}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}