import {useState} from "react"

export default function CommentsForm(){
    let [formData, setFormData] = useState({
        userName:"",
        remarks: "",
        ratings: "5"
    })

    let handleInputChange = (event)=>{
        setFormData((currData)=>{
            return {...currData, [event.target.name]: event.target.value }
        })
    }

    let handleSubmit = (event)=>{
        console.log(formData)
        event.preventDefault();
        setFormData({
            userName:"",
            remarks: "",
            ratings: "5"
        })
    }

    return(
        <div>
            <h3>Give Comments!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName : </label>
                <input 
                type="text" 
                placeholder="enter username" 
                value={formData.userName}
                id="username" 
                name="userName"
                onChange={handleInputChange}/>
                <br /><br />
                <label htmlFor="remark">Remakrs : </label>
                <textarea 
                value={formData.remarks}
                name="remarks" 
                id="remark" 
                placeholder="add some remaks"
                onChange={handleInputChange}>
                </textarea>
                <br /><br />
                <label htmlFor="rating">Ratings: </label>
                <input 
                type="number" 
                placeholder="ratings" 
                value={formData.ratings}
                id="rating" name="ratings"
                min="1" max="5" 
                onChange={handleInputChange}/>
                <br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}