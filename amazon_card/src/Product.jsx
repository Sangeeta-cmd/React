import "./Product.css"
import Price from "./Price.jsx"

function Product({title, idx}){
    let oldPrices = ["12,599", "11,999", "1,549", "549"];
    let newPrices = ["9,000", "7,650", "600", "390"]
    let description =[
        ["8,000 DPI", "5 Programmable Buttons"],
        ["intuitive surface", "designed for iPad pro"],
        ["designed for iPad pro", "intuitive surface"],
        ["wireless", "optical orientations"]
    ]

    return(
        <div className = "Product" >
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice= {oldPrices[idx]} newPrice={newPrices[idx]}  />
        </div>
    )
}

export default Product