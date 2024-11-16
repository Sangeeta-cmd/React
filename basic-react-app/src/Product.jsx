import "./Product.css";

function Product({ title, price, features }){             // Default value is set to 1 for price key
  // const list = features.map((item) => <li>{item}</li> );

  // const style = {backgroundColor : "yellow"}
  let isDiscount = price > 30000
  const style = {backgroundColor : isDiscount ? "yellow" : ""}

  return( 
      <div className="Product" style = {style} >
        <h2>{title}</h2>
        <h5>price : {price}</h5>
        {/* <ul>
          {features.map(
            (item)=> <li>{item}</li>
          )}
        </ul> */}
        {/* <p>{features2.a}</p> */}

        {/* applying conditions to add the elements */}

        {isDiscount ? <p>Discount of 5%</p> : null }

        {/* or we can also write above condition using && operator, {price>30000 && <p>Discount of 5%</p> } */}

      </div>
    )
}

export default Product;