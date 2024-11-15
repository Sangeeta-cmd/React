function Title(){     
    let name = "sangeeta";                           // title component 
    return (
      <div>
        <h1>This is a Title!</h1>
        <p>2 * 2 = {2*2}</p>
        <p>2 + 3 = {2+3}</p>
        <h3>Hi, {name.toUpperCase()}. How are you? </h3>
      </div>
    )
}

export default Title;