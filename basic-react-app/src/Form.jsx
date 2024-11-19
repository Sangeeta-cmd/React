function handleFormSubmit(event){                  {/*event object*/}
    event.preventDefault()
    console.log("form submited!!")
}

export default function Form(){
    return(
        <form onSubmit={handleFormSubmit} >
            <input type="text" placeholder="write something here" />
            <button>Submit</button>
        </form>
    )
}