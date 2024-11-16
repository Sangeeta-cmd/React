import Product from "./Product.jsx"

function ProductTab(){
    let option1 = ["fast", "durable", "reliable"];
    // let option2 = {a:"fast", b:"hi-tech"};
    return(
        <>
           {/* <Product title="Phone" price = {30000} features = {option1}  features2={{a:"fast", b:"hi-tech"}}/>    */}
           <Product  title= "Laptop"  price = {40000} features={option1} />
           <Product title="Phone" price = {30000} features={[]} />   {/*  Providing an empty array for features  to handle array properly */}
           <Product title="Pen" price = {10000} features={[]} />   
        </>
    )
}

export default ProductTab

// to pass integer/any other data structure other than string, we have to wrap it into the {}